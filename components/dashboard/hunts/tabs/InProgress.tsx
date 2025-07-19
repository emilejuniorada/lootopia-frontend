"use client";
import React from "react";
import { Hunt } from "@/stores/quest";
import HuntCard from "@/components/dashboard/hunts/Card";
import useFetch from "@/services/useFetch";
import { useSession } from "next-auth/react";

const InProgress = () => {
  const { rows: hunts, getDatas, loading } = useFetch<Hunt>();
  const { data: session, status } = useSession();

  // Fetch data after authentication
  React.useEffect(() => {
    if (status === "authenticated") {
      getDatas("/api/hunts");
    }
  }, [status]);

  const inProgressHunts = hunts?.filter((hunt: Hunt) =>
    hunt.huntParticipants?.some(
      (participant: any) => participant.userId === session?.user?.id
    )
  );

  return (
    <div className="w-full mt-4">
      {loading ? (
        <div className="w-8 h-8 mx-auto">
          <span className="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>
        </div>
      ) : inProgressHunts && inProgressHunts.length > 0 ? (<div className="md:grid grid-cols-4 gap-4 py-4 w-full">
        {inProgressHunts.map((hunt: Hunt) => (
        
          <HuntCard hunt={hunt} key={hunt.id} />

        ))}</div>
      ) : (
        <div className="text-center text-sm">Aucune chasse en cours.</div>
      )}
    </div>
  );
};

export default InProgress;
