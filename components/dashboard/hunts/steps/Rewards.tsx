import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormStore } from "@/stores/quest";

const Rewards = () => {
  const { reward, setReward } = useFormStore();
  return <div className="space-y-6">
    <RadioGroup defaultValue="crowns" >
      <div className="flex items-center gap-3">
        <RadioGroupItem value="crowns" id="crowns" />
        <Label htmlFor="crowns">Couronnes</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="badge" id="badge" disabled />
        <Label htmlFor="badge" className="cursor-not-allowed text-gray-400">Objet spécial (Bientôt disponible)</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="custom" id="custom" disabled />
        <Label htmlFor="custom" className="cursor-not-allowed text-gray-400">Personnaliser la récompense (Bientôt disponible)</Label>
      </div>
    </RadioGroup>
    <div className="space-y-2">
      <Label htmlFor="duration">Saisir le nombe de couronnes souhaité</Label>
      <Input
        id="reward"
        type="number"
        value={reward}
        onChange={e => setReward(e.target.value as unknown as number)}
        className="w-1/12"
      />
    </div>
  </div>;
};

export default Rewards;
