"use client";
import { Hunt } from "@/stores/quest";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import dynamic from 'next/dynamic'
import { useRouter } from "next/navigation";
import { Crown, User } from "lucide-react";

const QuestMap = dynamic(
  () => import('@/components/dashboard/hunts/maps/QuestMap'),
  {
    loading: () => <p>The map is loading</p>,
    ssr: false
  }
)
const HuntCard = ({hunt}:{ hunt: Hunt}) => {
  const router = useRouter()
  return <div className="rounded-lg border border-gray-200 shadow-md hover:scale-95 cursor-pointer hover:opacity-75 w-full" onClick={()=> router.push("/dashboard/hunts/"+hunt.id)}>
    <div className="w-full h-52"><QuestMap map={hunt.maps[0]} nonInteractive={true}/></div>
    <Card>
      <CardHeader>
        <CardTitle className="flex items-baseline gap-4">{hunt.title} <div className="text-xs text-gray-400 flex gap-1">{hunt?.participantsLimit} <User height={14} width={14} /> max</div></CardTitle>
        <CardDescription>{hunt.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="flex items-baseline gap-4 text-sm">Récompense : <span className="text-tertiary flex gap-2 font-bold">{hunt.reward} <Crown height={18} width={18}/></span></p>
        {hunt.endDate && (<p className="text-sm">Se termine le {new Date(hunt.endDate).toLocaleDateString("fr-FR")} à 00h</p>)}
        <p className="text-sm">Caches à trouver : {hunt.caches.length}</p>
        <div className="text-sm font-semibold">Crée par {hunt?.userNickName}</div>
      </CardContent>
    </Card>
  </div>;
};

export default HuntCard;
