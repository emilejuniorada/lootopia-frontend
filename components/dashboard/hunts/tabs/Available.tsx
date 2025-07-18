"use client";
import React from "react";
import useFetch from "@/services/useFetch";
import { Hunt } from "@/stores/quest";
import HuntCard from "@/components/dashboard/hunts/Card";
import { useSession } from "next-auth/react";

const Available = () => {
  const { rows: hunts, getDatas, loading } = useFetch();
  const { data: session, status } = useSession();
  const loadDatas = async () => {
    await getDatas("/api/hunts");
  }
  React.useEffect(() => {
    if (status === "authenticated") loadDatas();
  }, [status]);
  
  const visibleHunts = hunts?.filter(
    (hunt: Hunt) => hunt.creator !== session?.user?.id
  );

  return (
    <div className="w-full mt-4">
      {loading ? (
        <div className="w-8 h-8 mx-auto">
          <span className="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>
        </div>
      ) : visibleHunts && visibleHunts.length > 0 ? (
        visibleHunts.map((hunt: Hunt) => (
          <div className="md:grid grid-cols-4 gap-2 py-4" key={hunt.id}>
            <HuntCard hunt={hunt} />
          </div>
        ))
      ) : (
        <div className="text-center text-sm">Aucune chasse disponible.</div>
      )}
    </div>
  );
};

export default Available;
