import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormStore } from "@/stores/quest";
import dynamic from 'next/dynamic'
type StepFormProps = {
    hint?: string;
    keyType?: string;
    passphrase?: string;
    position?: L.LatLng | undefined;
    isRequired: boolean;
    reward: number | 0;
    setIsRequired: (isRequired: boolean) => void;
    setHint: (hint: string) => void;
    setKeyType: (keyType: string) => void;
    setPassphrase: (passphrase: string) => void;
    setPosition?: (position: L.LatLng) => void;
    setReward: (reward: number) => void;
};

const NewStepForm = ({ hint, keyType, passphrase, position, isRequired = false, reward, setHint, setKeyType, setPassphrase, setPosition, setIsRequired, setReward }: StepFormProps) => {
    const QuestMap = React.useMemo(() => dynamic(
        () => import('@/components/dashboard/hunts/maps/QuestMap'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])
    const { map } = useFormStore();
    return <div className="space-y-6 w-full overflow-y-auto">
        <div className="flex items-center space-x-2">
            <Switch id="is_is_requiredpublic" checked={isRequired} onCheckedChange={e => setIsRequired(!isRequired)} />
            <Label htmlFor="isRequired">Etape bligatoire ?</Label>
        </div>
        <div className="space-y-2">
            <Label htmlFor="hint">Indication</Label>
            <Input
                id="hint"
                value={hint}
                onChange={e => setHint(e.target.value)}
            />
        </div>
        <div className="md:grid grid-cols-2 md:space-y-0 space-y-4">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="hint">Récompense</Label>
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
                </div>
                <div className="space-y-2">
                    <Label htmlFor="reward">Saisir le nombe de couronnes souhaité</Label>
                    <Input
                        id="reward"
                        type="number"
                        value={reward}
                        onChange={e => setReward(e.target.value as unknown as number)}
                        className="w-3/12"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label className="py-2">Clef de validation</Label>
                <RadioGroup defaultValue="cache" onValueChange={e => setKeyType(e as 'cache' | 'passphrase')}>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="cache" id="cache" />
                        <Label htmlFor="cache">Découverte de la cache</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="passphrase" id="passphrase" />
                        <Label htmlFor="passphrase">Saisie d'une passphrase</Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
        {keyType === "passphrase" && <div className="space-y-2">
            <Label htmlFor="passphraseInput">Passphrase</Label>
            <Input
                id="passphraseInput"
                value={passphrase}
                onChange={e => setPassphrase(e.target.value)}
            />
        </div>}
        <div className="space-y-2 h-96">
            <div>
                <Label htmlFor="hint">Carte</Label>
                <span className="text-xs">Cliquez à l'endroit souhaité dans le rectangle représentant la zone de votre chasse pour spécifier le point où se trouve la cache.</span>
            </div>
            <QuestMap markable={true} setPosition={setPosition} markerPosition={position} map={map} />
        </div>
    </div>;
};

export default NewStepForm;
