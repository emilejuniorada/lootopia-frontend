import React from "react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Available from "@/components/dashboard/hunts/tabs/Available";
import Completed from "@/components/dashboard/hunts/tabs/Completed";
import InProgress from "@/components/dashboard/hunts/tabs/InProgress";
import Personal from "@/components/dashboard/hunts/tabs/Personal";

export default function Dashboard() {
    return (
        <div className="w-full">
            <div className="font-bold text-lg">
                Chasses
            </div>
            <div className="text-sm">
                Accédez à vos chasses en cours et vos chasses créées, inscrivez-vous à de nouvelles chasses ou consultez l’historique des vos précédentes chasses
            </div>
            <div className="flex w-full flex-col gap-6 mt-10">
                <Tabs defaultValue="inProgress">
                    <TabsList className="items-center justify-start">
                        <TabsTrigger value="inProgress">Chasses en cours</TabsTrigger>
                        <TabsTrigger value="available">Chasses disponibles</TabsTrigger>
                        <TabsTrigger value="completed">Chasses terminées</TabsTrigger>
                        <TabsTrigger value="personal">Mes chasses</TabsTrigger>
                    </TabsList>
                    <TabsContent value="inProgress">
                        <InProgress />
                    </TabsContent>
                    <TabsContent value="available">
                        <Available />
                    </TabsContent>
                    <TabsContent value="completed">
                        <Completed />
                    </TabsContent>
                    <TabsContent value="personal">
                        <Personal />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
