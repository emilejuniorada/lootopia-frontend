import React from "react";

const Page = () => {
    return <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold">Politique de Confidentialité</h1>

        <section>
            <h2 className="text-xl font-semibold">1. Qui sommes-nous ?</h2>
            <p>
                Notre application de chasse au trésor propose une expérience interactive sur carte OpenStreetMap.
                Les utilisateurs peuvent créer et participer à des chasses, acheter des objets virtuels et interagir avec d&apos;autres joueurs via leur profil.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">2. Quelles données personnelles collectons-nous ?</h2>
            <p>Nous collectons uniquement les données nécessaires à l&apos;utilisation de notre service :</p>
            <ul className="list-disc list-inside mt-2">
                <li>Informations de compte : adresse email, pseudonyme, mot de passe (chiffré)</li>
                <li>Données de jeu : chasses créées, chasses participées, récompenses gagnées</li>
                <li>Position géographique approximative (pour les interactions sur la carte)</li>
                <li>Historique d&apos;achats : nombre de couronnes achetées et utilisées</li>
                <li>Préférences du profil (paramètres, langue, etc.)</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold">3. Pourquoi collectons-nous vos données ?</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside mt-2">
                <li>Créer et gérer votre compte utilisateur</li>
                <li>Permettre la participation aux chasses et événements</li>
                <li>Afficher les éléments sur la carte en fonction de votre position</li>
                <li>Assurer la sécurité du service (authentification, lutte contre la triche)</li>
                <li>Gérer les achats de couronnes et objets virtuels</li>
                <li>Répondre à vos demandes (support, export, suppression)</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold">4. Partage des données</h2>
            <p>
                Nous ne vendons ni ne partageons vos données personnelles avec des tiers, sauf dans les cas suivants :
            </p>
            <ul className="list-disc list-inside mt-2">
                <li>Obligations légales (demande judiciaire, enquête)</li>
                <li>
                    Traitement des paiements via notre prestataire (Stripe ou autre), qui reçoit uniquement les données
                    nécessaires à la transaction
                </li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold">5. Stockage et sécurité</h2>
            <p>
                Vos données sont stockées sur des serveurs sécurisés. Nous utilisons des pratiques de sécurité conformes
                aux standards de l&apos;industrie : chiffrement des mots de passe, authentification sécurisée, protection contre les accès non autorisés.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">6. Durée de conservation</h2>
            <p>
                Vos données sont conservées :
            </p>
            <ul className="list-disc list-inside mt-2">
                <li>Tant que votre compte est actif</li>
                <li>Jusqu&apos;à 30 jours après la suppression de votre compte (sauf obligation légale contraire)</li>
            </ul>
            <p>Vous pouvez à tout moment demander la suppression immédiate de vos données.</p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside mt-2">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification (modifier email, pseudonyme, mot de passe)</li>
                <li>Droit à l&apos;effacement (supprimer votre compte et vos données)</li>
                <li>Droit à la portabilité (export de vos données)</li>
                <li>Droit d&apos;opposition (à certaines utilisations, ex. emails marketing — non utilisé actuellement)</li>
            </ul>
            <p>
                Pour exercer vos droits, contactez-nous via le formulaire prévu dans l&apos;application ou par email à <a href="mailto:contact@lootopia.com" className="underline text-blue-600">contact@lootopia.com</a>.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">8. Utilisation des cookies</h2>
            <p>
                Nous utilisons uniquement des cookies techniques nécessaires au bon fonctionnement de l&apos;application.
                Aucun cookie publicitaire ou de suivi tiers n&apos;est utilisé.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">9. Localisation</h2>
            <p>
                L&apos;application peut utiliser votre position approximative uniquement pendant l&apos;utilisation active de la carte,
                afin d&apos;afficher les éléments autour de vous. Ces données ne sont jamais stockées ni partagées.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">10. Modifications</h2>
            <p>
                Cette politique peut être mise à jour. Toute modification majeure sera signalée dans l&apos;application.<br />
                <strong>Date de dernière mise à jour :</strong> 19 juillet 2025.
            </p>
        </section>
    </div>;
};

export default Page;
