import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Map as MapType, useFormStore } from "@/stores/quest";
import { Switch } from "@/components/ui/switch"
import Datepicker from "@/components/ui/datepicker";
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button";
import { Map} from 'lucide-react';
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

const Infos = () => {
  const { title, description, isPublic, duration, participantsLimit, endDate, map, setTitle, setDescription, setIsPublic, setDuration, setEndDate, setParticipantsLimit, setWorld, setMap, setValidation } = useFormStore();
  const QuestMap = React.useMemo(() => dynamic(
    () => import('@/components/dashboard/hunts/maps/QuestMap'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  const validate = () => {
    if (!title) return false;
    if (!description) return false;
    if (!map) return false;
    return true;
  };

  React.useEffect(() => {
    setValidation('infos', validate);
  }, [title, description, map]);

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center space-x-2">
        <Switch id="isPublic" checked={isPublic} onCheckedChange={e => setIsPublic(!isPublic)} disabled/>
        <Label htmlFor="isPublic" className="cursor-not-allowed text-gray-400">Mode {isPublic ? "Privé" : "Public"}</Label>
      </div>
      <div className="w-full md:flex items-center gap-4 md:space-y-0 space-y-2">
        <div className="md:w-1/2 space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="md:w-1/2 space-y-2">
          <Label htmlFor="description">Description *</Label>
          <Input
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="md:w-1/2 space-y-2">
        <Label className="py-2">Monde</Label>
        <RadioGroup defaultValue="Cartographique" onValueChange={e => setWorld(e as 'Reel' | 'Cartographique')}>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="Cartographique" id="cartographic" />
            <Label htmlFor="cartographic">Cartographique</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="Reel" id="reel" disabled/>
            <Label htmlFor="reel" className="cursor-not-allowed text-gray-400">Réel</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="w-1/2 space-y-2">
        <Label htmlFor="title">Carte de la chasse *</Label>
        <AlertDialog>
          <AlertDialogTrigger className="border text-sm shadow-sm rounded-lg p-1 cursor-pointer"><Map /></AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Carte de la chasse</AlertDialogTitle>
              <AlertDialogDescription>
                Délimitez le périmètre de votre chasse en traçant un rectangle sur la carte. Il vous suffit de cliquer sur le carré noir en dessous du - pour activer le mode rectange.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="h-96"><QuestMap setMap={setMap} drawable={true} /></div>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction>Terminer</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="w-full md:flex items-start space-y-4 md:space-y-0 gap-4">
        <div className="md:w-1/2 space-y-2">
          <Label htmlFor="participantsLimit">Nombre de participants</Label>
          <Input
            id="participantsLimit"
            type="number"
            value={participantsLimit ?? 0}
            onChange={e => setParticipantsLimit(e.target.value as unknown as number)}
          />
          <span className="text-gray-500 text-xs">Laissez à 0 pour un nombre illimité de participants</span>
        </div>
        <div className="md:w-1/2 space-y-2">
          <Label htmlFor="endDate">Date de fin*</Label>
          <Datepicker setDateValue={setEndDate}/>
        </div>
      </div>
    </div>
  );
};

export default Infos;
