'use client';
import React from "react";
import { useState } from 'react';
import { useFormStore } from "@/stores/quest";
import Infos from '@/components/dashboard/hunts/steps/Infos';
import Caches from '@/components/dashboard/hunts/steps/Caches';
import Rewards from '@/components/dashboard/hunts/steps/Rewards';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import useFetch from "@/services/useFetch";
import { useSession } from "next-auth/react";
import { convertStringDate } from "@/lib/utils";
import { useRouter } from "next/navigation";

const steps = ['Informations de la chasse', 'Configuration des Caches', 'Récompenses'];
const Create = () => {
  const { data: session } = useSession();
  const [step, setStep] = useState(0);
  const state = useFormStore();
  const router = useRouter()
  const { createData } = useFetch();
  const handleNext = async () => {
    const validations = state.validations;
    const stepKeys = ['infos', 'caches', 'rewards'];
    const currentStepKey = stepKeys[step];
    const isValid = await validations[currentStepKey]?.();
    if (!isValid) {
      toast.error("Veuillez remplir les champs obligatoires", { description: "Il s'agit des champs marqués d'un * " });
      return;
    }

    setStep((s) => s + 1);
  };
  const handleSubmit = async () => {
    const success = await createData("/api/hunts/create", {
      userId: session!.user?.id,
      title: state.title,
      description: state.description,
      world: state.world,
      duration: state.duration,
      endDate: convertStringDate(state.endDate! as string),
      isPublic: state.isPublic,
      participantsLimit: state.participantsLimit,
      map: state.map,
      caches: state.caches,
      reward: state.reward
    })
    if (success){
      toast.success("Chasse enregistrée avec succès!")
      state.resetForm()
      router.refresh()
    }

  };
  const renderStepComponent = () => {
    switch (step) {
      case 0:
        return <Infos />;
      case 1:
        return <Caches />;
      case 2:
        return <Rewards />;
      default:
        return null;
    }
  };
  return <div className="w-full md:w-11/12 flex flex-col relative overflow-auto">
    <div className="font-bold text-lg">
      Nouvelle chasse
    </div>
    <div className="text-sm">
      Créez une nouvelle chasse entièrement personnalisée. Rajoutez des énigmes, des caches et des récompenses pour les participants.
    </div>
    <div className="flex w-full flex-col gap-6 mt-10 relative grow">
      <h2 className="text-md font-bold">{steps[step]}</h2>
      {/* {JSON.stringify(state, null, 2)} */}
      <div className="px-4">{renderStepComponent()}</div>
    </div>
    <div className="flex flex-col flex-1 w-full bg-white">
      <div className="flex justify-between items-center pt-4">
        {step > 0 && (
          <Button type="button"
            onClick={() => setStep((s) => s - 1)} className="bg-black text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
            Retour
          </Button>
        )}
        <div className="flex-1" />
        {step < steps.length - 1 ? (
          <Button
            type="button"
            onClick={handleNext}
            className="bg-black text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90"
            size={"lg"}
          >
            Suivant
          </Button>
        ) : (
          <Button type="button"
            onClick={handleSubmit} className="text-white" size={"lg"}>
            Terminer
          </Button>
        )}
      </div>
    </div>
  </div>;
};

export default Create;
