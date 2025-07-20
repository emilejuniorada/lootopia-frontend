import React from "react";
import { Button } from "@/components/ui/button"
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
import NewStepForm from "@/components/dashboard/hunts/forms/NewStepForm";
import { useFormStore } from "@/stores/quest";
import { Trash } from "lucide-react";

const Caches = () => {
  const { caches, addCache, removeCache, setValidation } = useFormStore();
  const [hint, setHint] = React.useState("");
  const [keyType, setKeyType] = React.useState("cache");
  const [passphrase, setPassphrase] = React.useState("");
  const [position, setPosition] = React.useState<L.LatLng | undefined>();
  const [isRequired, setIsRequired] = React.useState(false);
  const [reward, setReward] = React.useState(0);
  const handleAddCache = () => {
    addCache({
      id: caches.length + 1,
      latitude: position?.lat,
      longitude: position?.lng,
      hint: hint,
      isRequired: isRequired,
      keyType: keyType as 'cache' | 'passphrase',
      passphrase: passphrase,
      reward: reward,
    })
    setHint("")
    setKeyType("cache")
    setPassphrase("")
    setPosition(undefined)
    setIsRequired(false)
    setReward(0)
  }
    const validate = () => {
      return true;
    };
  
    React.useEffect(() => {
      setValidation('caches', validate);
    }, []);
  return <div className="space-y-6 w-full">
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary text-white text-sm shadow-sm rounded-xl h-8 px-3 cursor-pointer">Ajouter une étape</AlertDialogTrigger>
      <AlertDialogContent className="bg-white md:max-w-4xl overflow-y-auto md:h-[70vh] h-[90]">
        <AlertDialogHeader>
          <AlertDialogTitle>Ajouter une étape</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <NewStepForm hint={hint} keyType={keyType} passphrase={passphrase} setHint={setHint} setKeyType={setKeyType} setPassphrase={setPassphrase} position={position} setPosition={setPosition} isRequired={isRequired} setIsRequired={setIsRequired} reward={reward} setReward={setReward} />
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleAddCache}>Terminer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <div className="flex items-center gap-4">
      {caches.map((cache, index) => (
        <div key={index} className="md:w-1/3 w-full space-y-2 p-4 rounded-lg shadow-md relative">
          <div>Cache N° {index+1}</div>
          <Button variant="destructive" className="absolute top-2 right-2 hover:scale-90 text-red-600" onClick={() => removeCache(cache.id!)}><Trash/></Button>
          <div>
            <span className="font-bold">Indice :</span> {cache.hint}
          </div>
          <div>
            <span className="font-bold">Clef de vérification :</span> {cache.keyType}
          </div>
          {cache.keyType === 'passphrase' && (<div>
            <span className="font-bold">Passphrase :</span> {cache.passphrase}
          </div>)}
          <div>
            <span className="font-bold">Cache :</span> {cache.latitude}, {cache.longitude}
          </div>
        </div>
      ))}
    </div>
  </div>;
};

export default Caches;
