"use client";
import React from "react";
import useFetch from "@/services/useFetch";
import { Hunt } from "@/stores/quest";
import { useSession } from "next-auth/react";
import { Crown, PenBoxIcon, PlayCircle, User } from "lucide-react";
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const QuestMap = dynamic(
    () => import('@/components/dashboard/hunts/maps/QuestMap'),
    {
        loading: () => <p>The map is loading</p>,
        ssr: false
    }
)
const SinglePage = ({ id }: { id: string }) => {
    const { data: session, status } = useSession();
    const { row: hunt, getData, loading } = useFetch<Hunt>();
    const { createData: participate } = useFetch<Hunt>();
    const router = useRouter()
    const loadData = async () => {
        await getData("/api/hunts", id);
    }

    const handleParticipate = async () => {
        const success = await participate("/api/hunts/" + hunt!.id + "/participants", { userId: session!.user.id })
        if (success) router.push("/dashboard/hunts/" + hunt!.id + "/playground")
    }
    React.useEffect(() => {
        if (status === "authenticated") loadData();
    }, [status]);
    return <div className="w-full mt-4">
        {!loading && hunt && (
            <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="flex flex-col items-center md:w-2/3 space-y-4 order-last md:order-first">
                    <div className="w-full h-96"><QuestMap map={hunt?.maps[0]} nonInteractive={true} /></div>
                    <div className="flex items-baseline gap-4">
                        <div className="text-xl font-semibold">{hunt?.title}</div>
                        {hunt.participantsLimit! > 0 && <div className="text-xs text-gray-400 flex gap-1">{hunt?.huntParticipants?.length} <User height={14} width={14} />/ {hunt?.participantsLimit}</div>}
                        {hunt.participantsLimit! <= 0 && <div className="text-xs text-gray-400 flex gap-1"><User height={14} width={14} /> Illimité</div>}
                    </div>
                    <div className="text-md text-center">{hunt?.description}</div>
                    {hunt.endDate && (<div className="text-sm">Se termine le {new Date(hunt?.endDate).toLocaleDateString("fr-FR")} à 00h</div>)}
                    <div className="flex items-baseline gap-2 text-sm">Récompense : <span className="text-tertiary flex gap-2 font-bold">{hunt?.reward} <Crown height={18} width={18} /></span></div>
                    <div className="text-cm font-semibold">Crée par {hunt?.userNickName}</div>
                </div>
                <div className="flex flex-col items-center gap-3 md:w-1/3">
                    {hunt?.participantsLimit! > 0 ? (hunt?.huntParticipants?.length == hunt?.participantsLimit!) && (
                        <div className="flex flex-col items-center gap-2">
                            <div className="font-bold">La limite de participants est atteinte</div>
                            <Link href="/dashboard">
                                <Button variant="outline" size={"lg"} type="button" className={cn("transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-90")}>
                                    Retourner à la liste des chasses
                                </Button>
                            </Link>
                        </div>
                    ) : ""}
                    {(!hunt?.isParticipant && session?.user.id !== hunt?.creator && hunt?.isActive && (hunt?.participantsLimit! > 0 ? hunt?.huntParticipants?.length < hunt?.participantsLimit! : "")) && (
                        <Button variant="outline" size={"lg"} type="button" className="transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-90" onClick={handleParticipate}>
                            Participer à la chasse<PlayCircle />
                        </Button>
                    )}
                    {(session?.user.id === hunt.creator) && (
                        <Button variant="outline" size={"lg"} type="button" className="transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-90" disabled>
                            Modifier la chasse <PenBoxIcon />
                        </Button>
                    )}

                    {hunt?.isParticipant && hunt?.isActive && hunt?.progress?.requiredProgressPercentage < 100 && (
                        <Button variant="outline" size={"lg"} type="button" className="transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-90" onClick={() => router.push("/dashboard/hunts/" + hunt!.id + "/playground")}>
                            Continuer la chasse<PlayCircle />
                        </Button>
                    )}
                    {hunt?.progress?.requiredProgressPercentage == 100 && (
                        <div className="flex flex-col items-center gap-2">
                            <div className="font-bold">Vous avez déjà terminé cette chasse.</div>
                            <Link href="/dashboard">
                                <Button variant="outline" size={"lg"} type="button" className={cn("transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-90")}>
                                    Retourner à la liste des chasses
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )}
        {loading && <div className="w-8 h-8 mx-auto">
            <span className="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>
        </div>
        }
    </div>;
};

export default SinglePage;
