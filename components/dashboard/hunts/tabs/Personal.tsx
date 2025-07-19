"use client";
import React from "react";
import useFetch from "@/services/useFetch";
import { Hunt } from "@/stores/quest";
import Card from "@/components/dashboard/hunts/Card";
import { useSession } from "next-auth/react";

const Personal = () => {
  const { rows: hunts, getDatas, loading } = useFetch<Hunt>();
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (status === "authenticated") {
      getDatas("/api/hunts");
    }
  }, [status]);

  const personalHunts = hunts?.filter(
    (hunt: Hunt) => hunt.creator === session?.user?.id
  );

  return (
    <div className="w-full mt-4">
      {loading ? (
        <div className="w-8 h-8 mx-auto">
          <span className="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>
        </div>
      ) : personalHunts && personalHunts.length > 0 ? (
          <div className="md:grid grid-cols-4 gap-4 py-4">
            {personalHunts.map((hunt: Hunt) => (
              <Card hunt={hunt} key={hunt.id}/>
            ))}
          </div>
      ) : (
        <div className="text-center text-sm">Vous n'avez créé aucune chasse.</div>
      )}
    </div>
  );
};

export default Personal;
