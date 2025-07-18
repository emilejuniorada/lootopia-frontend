"use client";
import React from "react";
import dynamic from 'next/dynamic'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useFetch from "@/services/useFetch";
import { Cache, Hunt } from "@/stores/quest";
import { Button } from "@/components/ui/button";
import { BadgeHelp, Crown, Shovel, User } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import L, { LatLng } from 'leaflet';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link";

const QuestMap = dynamic(
    () => import('@/components/dashboard/hunts/maps/QuestMap'),
    {
        loading: () => <p>The map is loading</p>,
        ssr: false
    }
)
const Playground = ({ id }: { id: string }) => {
    const { data: session, status, update } = useSession();
    const { row: hunt, getData, createData, loading } = useFetch<Hunt>();
    const { getData: fetchUser } = useFetch();
    const [position, setPosition] = React.useState<L.LatLng | undefined>();
    const [digMode, setDigMode] = React.useState(false);
    const [showConfirmation, setShowConfirmation] = React.useState(false);
    const [showCache, setShowCache] = React.useState(false);
    const [selectedCache, setSelectedCache] = React.useState<Cache>();
    const [passphrase, setPassphrase] = React.useState("");
    const router = useRouter()
    const loadData = async () => {
        await getData("/api/hunts", id);
    }
    const handleDigClick = () => {
        setDigMode(!digMode);
    };
    const validateCache = async (cache?: Cache) => {
        const finalCache = cache || selectedCache;
        if (!finalCache) return;
        const success = await createData("/api/caches/" + finalCache.id + "/discover", {
            userId: session?.user.id,
            passphrase: passphrase
        })
        if (success) {
            toast.message(<div className="flex flex-col gap-2 text-sm"><div>Vous avez trouvé une cache !</div> <div className="flex items-baseline gap-2">Vous avez obtenu : <span className="text-tertiary flex gap-2 font-bold">{finalCache.reward} <Crown height={18} width={18} /></span></div></div>)
            setDigMode(false)
            await loadData()
            const user = await fetchUser("/api/user", session?.user.id)
            await update({ user:{
                crowns: user!.crowns
            }})
        }
    };
    const digCache = () => {
        hunt?.caches.map((cache: Cache) => {
            const distance = position?.distanceTo(L.latLng(cache.latitude!, cache.longitude!));
            if (!hunt.progress.discoveredCaches.some((item: Cache) => item.id === cache.id)) {
                if (distance! <= 100) {
                    setSelectedCache(cache)
                    if (cache.keyType === "passphrase") {
                        setShowCache(true)
                    } else {
                        validateCache(cache)
                    }
                    setPosition(undefined);
                }
            }
        });
    }

    React.useEffect(() => {
        if (status === "authenticated") loadData();
    }, [status]);

    React.useEffect(() => {
        if (position && digMode) {
            setShowConfirmation(true)
        }
    }, [position]);

    return <div className="w-full h-full">
        <div className="text-sm font-bold py-4">La zone de la chasse est réprésentée par la zone délimitée en bleu*</div>
        {!loading && hunt && (
            <div className="flex items-center gap-4 w-full h-10/12 mb-4">
                <div className="w-2/3 h-full"><QuestMap map={hunt.maps[0]} markable digMode={digMode}
                    onDigClick={(pos) => setPosition(pos)} discoveredCaches={hunt.progress.discoveredCaches} /></div>
                <div className="flex flex-col items-center gap-3 w-1/3">
                    <div className="flex items-baseline gap-4">
                        <div className="text-xl font-semibold">{hunt?.title}</div>
                        {hunt.participantsLimit! > 0 && <div className="text-xs text-gray-400 flex gap-1">{hunt?.huntParticipants?.length} <User height={14} width={14} />/ {hunt?.participantsLimit}</div>}
                        {hunt.participantsLimit! <= 0 && <div className="text-xs text-gray-400 flex gap-1"><User height={14} width={14} /> Illimité</div>}
                    </div>
                    <div className="text-md text-center">{hunt?.description}</div>
                    {hunt.endDate && (<div className="text-sm">Se termine le {new Date(hunt.endDate).toLocaleDateString("fr-FR")} à 00h</div>)}
                    <div className="flex items-baseline gap-2 text-sm">Récompense : <span className="text-tertiary flex gap-2 font-bold">{hunt.reward} <Crown height={18} width={18} /></span></div>
                    <div className="font-semibold">Caches totales : {hunt.progress.totalCaches}</div>
                    <div className="font-semibold">Caches trouvées : {hunt.progress.discoveredCaches.length}</div>
                    <div className="font-semibold">Caches obligatoires à trouver : {hunt.progress.requiredCaches.length}</div>
                    <div className="font-semibold">Caches obligatoires trouvées : {hunt.progress.discoveredRequiredCaches}</div>
                    {hunt.progress.requiredProgressPercentage < 100 && <div className="flex gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" size={"lg"} type="button" className="transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-90">
                                    Indices <BadgeHelp />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 overflow-auto bg-white">
                                <div className="flex flex-col gap-4">
                                    {hunt.caches.map((cache, index) => (
                                        <div>
                                            <div>Cache N°{index + 1}</div>
                                            <div>{cache.hint}</div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Button variant="outline" size={"lg"} type="button" className={cn("transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-90", digMode ? "bg-black text-white" : "")} onClick={handleDigClick}>
                            Creuser <Shovel />
                        </Button>
                    </div>}
                    {hunt.progress.requiredProgressPercentage == 100 && <div className="flex flex-col items-center gap-2">
                        <div className="font-bold">Félicitations ! Vous avez terminé la chasse.</div>
                        <Link href="/dashboard">
                            <Button variant="outline" size={"lg"} type="button" className={cn("transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-90")}>
                                Retourner à la liste des chasses
                            </Button>
                        </Link>
                    </div> }
                    {digMode && (<span className="text-xs font-bold w-2/3 text-center">Cliquez sur l'endroit de votre choix dans la zone de chasse pour creuser</span>)}
                </div>
            </div>
        )}
        {loading && <div className="w-8 h-8 mx-auto">
            <span className="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>
        </div>
        }
        <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Souhaitez-vous creuser à cet endroit ?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Si vous n'êtes pas sûr, vous pouvez annuler pour relire à nouveau les indices afin de déceler les caches.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => {
                        setDigMode(false);
                        setPosition(undefined);
                    }}>
                        Annuler
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={digCache}>Creuser</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        <AlertDialog open={showCache} onOpenChange={setShowCache}>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Vous avez trouvé une cache !</AlertDialogTitle>
                    <AlertDialogDescription>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="space-y-4">
                    <Label htmlFor="passphraseInput">Saisissez la passphrase correcte et validez</Label>
                    <Input
                        id="passphraseInput"
                        type="text"
                        value={passphrase}
                        onChange={e => setPassphrase(e.target.value)}
                    />
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => {
                        setPassphrase("")
                        setSelectedCache(undefined)
                    }}>
                        Annuler
                    </AlertDialogCancel>
                    <AlertDialogAction disabled={passphrase !== selectedCache?.passphrase} onClick={() => { validateCache() }}>
                        Terminer
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>;
};

export default Playground;
