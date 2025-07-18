"use client";
import React from "react";
import useFetch from "@/services/useFetch";
import { Hunt } from "@/stores/quest";
import Card from "@/components/dashboard/hunts/Card";
import { useSession } from "next-auth/react";

const Completed = () => {
  const { rows: hunts, getDatas, loading } = useFetch<Hunt>();
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (status === "authenticated") {
      getDatas("/api/hunts");
    }
  }, [status]);

  const completedHunts = hunts?.filter((hunt: Hunt) =>
    hunt.huntParticipants?.some(
      (participant: any) =>
        participant.userId === session?.user?.id &&
        participant.completed === true
    )
  );

  return (
    <div className="w-full mt-4">
      {loading ? (
        <div className="w-8 h-8 mx-auto">
          <span className="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>
        </div>
      ) : completedHunts && completedHunts.length > 0 ? (
        completedHunts.map((hunt: Hunt) => (
          <div className="md:grid grid-cols-4 gap-2 py-4" key={hunt.id}>
            <Card hunt={hunt} />
          </div>
        ))
      ) : (
        <div className="text-center text-sm">Aucune chasse terminée.</div>
      )}
    </div>
  );
};

export default Completed;
