import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return <div className="container flex-1 mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">FAQ</h1>
            <p className="text-muted-foreground mt-2">Trouvez les réponses à vos questions ici. Si vous n'y parvenez pas, contactez nous</p>
        </div>
        <Accordion type="multiple" className="w-full space-y-2 cursor-pointer">
            {/* Compte & Connexion */}
            <AccordionItem value="account">
                <AccordionTrigger className="cursor-pointer">🔐 Compte & Connexion</AccordionTrigger>
                <AccordionContent>
                    <p><strong>Q :</strong> Comment créer un compte ?<br />
                        <strong>R :</strong> Cliquez sur &quot;S&apos;inscrire&quot; en haut à droite de la page d&apos;accueil et remplissez le formulaire avec votre email, un pseudonyme et un mot de passe.</p>

                    <p className="mt-2"><strong>Q :</strong> J&apos;ai oublié mon mot de passe, que faire ?<br />
                        <strong>R :</strong> Cliquez sur &quot;Mot de passe oublié ?&quot; sur la page de connexion pour recevoir un lien de réinitialisation par email.</p>

                    <p className="mt-2"><strong>Q :</strong> Comment modifier mon email ou pseudonyme ?<br />
                        <strong>R :</strong> Accédez à votre profil utilisateur &gt; Paramètres &gt; Informations personnelles pour mettre à jour votre email ou pseudonyme.</p>

                    <p className="mt-2"><strong>Q :</strong> Puis-je supprimer mon compte ?<br />
                        <strong>R :</strong> Oui. Allez dans Paramètres &gt; Sécurité &gt; Supprimer mon compte. Attention : cette action est irréversible.</p>

                    <p className="mt-2"><strong>Q :</strong> Comment exporter mes données ?<br />
                        <strong>R :</strong> Dans les Paramètres &gt; Confidentialité, cliquez sur &quot;Exporter mes données&quot;. Vous recevrez un fichier contenant vos données personnelles.</p>
                </AccordionContent>
            </AccordionItem>

            {/* Chasses au Trésor */}
            <AccordionItem value="hunts">
                <AccordionTrigger className="cursor-pointer">🗺️ Chasses au Trésor</AccordionTrigger>
                <AccordionContent>
                    <p><strong>Q :</strong> Comment créer une chasse au trésor ?<br />
                        <strong>R :</strong> Une fois connecté, cliquez sur &quot;Créer une chasse&quot; dans le tableau de bord, puis placez les caches et indices sur la carte.</p>

                    <p className="mt-2"><strong>Q :</strong> Puis-je participer à ma propre chasse ?<br />
                        <strong>R :</strong> Oui, mais vous ne pourrez pas recevoir de récompense pour une chasse que vous avez créée.</p>

                    <p className="mt-2"><strong>Q :</strong> Comment rejoindre une chasse créée par un autre joueur ?<br />
                        <strong>R :</strong> Rendez-vous sur la carte ou dans la section &quot;Chasses disponibles&quot;, sélectionnez une chasse et cliquez sur &quot;Participer&quot;.</p>
                </AccordionContent>
            </AccordionItem>

            {/* Participation & Évènements */}
            <AccordionItem value="events">
                <AccordionTrigger className="cursor-pointer">🧭 Participation & Évènements</AccordionTrigger>
                <AccordionContent>
                    <p><strong>Q :</strong> Y a-t-il des événements spéciaux ?<br />
                        <strong>R :</strong> Oui ! Des événements sont organisés régulièrement. Consultez la page &quot;Évènements&quot; pour voir les dates et les conditions de participation.</p>

                    <p className="mt-2"><strong>Q :</strong> Que se passe-t-il quand je trouve un trésor ?<br />
                        <strong>R :</strong> Vous gagnez des couronnes (la monnaie du jeu), des points d&apos;expérience, et parfois des objets rares selon les règles de la chasse.</p>
                </AccordionContent>
            </AccordionItem>

            {/* Couronnes & Achats */}
            <AccordionItem value="crowns">
                <AccordionTrigger className="cursor-pointer">👑 Couronnes et Achats</AccordionTrigger>
                <AccordionContent>
                    <p><strong>Q :</strong> À quoi servent les couronnes ?<br />
                        <strong>R :</strong> Les couronnes sont la monnaie virtuelle du jeu. Elles permettent d&apos;acheter des objets, des indices supplémentaires, ou d&apos;accéder à des chasses premium.</p>

                    <p className="mt-2"><strong>Q :</strong> Comment acheter des couronnes ?<br />
                        <strong>R :</strong> Cliquez sur l&apos;icône des couronnes dans le menu, choisissez un pack, puis procédez au paiement via Stripe ou autre méthode sécurisée.</p>
                </AccordionContent>
            </AccordionItem>

            {/* Sécurité & Confidentialité */}
            <AccordionItem value="privacy">
                <AccordionTrigger className="cursor-pointer">🛡️ Sécurité & Confidentialité</AccordionTrigger>
                <AccordionContent>
                    <p><strong>Q :</strong> Mes données sont-elles sécurisées ?<br />
                        <strong>R :</strong> Oui, nous utilisons des protocoles de sécurité standard pour protéger vos données personnelles.</p>

                    <p className="mt-2"><strong>Q :</strong> Mon emplacement est-il partagé avec d&apos;autres utilisateurs ?<br />
                        <strong>R :</strong> Non, votre position exacte n&apos;est jamais partagée publiquement. Seules les interactions liées à une chasse sont visibles par les autres participants.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>;
};

export default Faq;
