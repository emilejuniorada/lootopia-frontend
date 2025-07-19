import Link from "next/link";
import React from "react";

const Page = () => {
    return <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold">Conditions Générales d&apos;Utilisation (CGU)</h1>

        <section>
            <h2 className="text-xl font-semibold">1. Objet</h2>
            <p>
                Les présentes Conditions Générales d&apos;Utilisation ont pour objet de définir les modalités d&apos;accès et d&apos;utilisation de notre application web de chasse au trésor sur carte OpenStreetMap.
                En utilisant l&apos;application, vous acceptez pleinement et sans réserve les présentes CGU.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">2. Inscription et compte utilisateur</h2>
            <p>
                L&apos;utilisateur doit créer un compte pour accéder aux fonctionnalités de l&apos;application.
                Lors de l&apos;inscription, il s&apos;engage à fournir des informations exactes et à jour.
            </p>
            <p>
                L&apos;utilisateur est responsable de la confidentialité de son mot de passe. En cas de suspicion d&apos;utilisation frauduleuse de son compte, il doit nous contacter immédiatement.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">3. Fonctionnalités proposées</h2>
            <p>L&apos;application permet notamment :</p>
            <ul className="list-disc list-inside mt-2">
                <li>de créer, gérer et participer à des chasses au trésor ;</li>
                <li>de rejoindre des événements spéciaux organisés par l&apos;équipe ou la communauté ;</li>
                <li>d&apos;acheter des couronnes (monnaie virtuelle) pour débloquer des contenus ou objets ;</li>
                <li>de modifier ses informations de profil et exporter/supprimer ses données.</li>
            </ul>
            <p>
                Certaines fonctionnalités peuvent évoluer ou être temporairement désactivées pour des raisons techniques ou de mise à jour.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">4. Règles de conduite</h2>
            <p>En utilisant l&apos;application, vous vous engagez à :</p>
            <ul className="list-disc list-inside mt-2">
                <li>ne pas utiliser l&apos;application à des fins illégales ou malveillantes ;</li>
                <li>respecter les autres utilisateurs et ne pas les harceler ;</li>
                <li>ne pas tricher ni contourner les mécaniques de jeu ;</li>
                <li>ne pas usurper l&apos;identité d&apos;autrui.</li>
            </ul>
            <p>
                Tout manquement à ces règles pourra entraîner une suspension ou suppression du compte, sans remboursement des achats effectués.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">5. Achats et couronnes</h2>
            <p>
                Les couronnes constituent une monnaie virtuelle utilisable uniquement dans l&apos;application. Elles peuvent être achetées via un prestataire tiers sécurisé (ex : Stripe).
                Ces achats sont définitifs, non remboursables et non transférables.
            </p>
            <p>
                L&apos;utilisateur est invité à consulter les lois de son pays concernant les achats numériques.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">6. Responsabilités</h2>
            <p>
                Nous mettons tout en œuvre pour assurer le bon fonctionnement de l&apos;application, mais ne garantissons pas une accessibilité continue ou l&apos;absence totale d&apos;erreurs.
            </p>
            <p>
                Nous déclinons toute responsabilité en cas de perte de données, de mauvaise utilisation du service ou de préjudice lié à une interruption temporaire.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">7. Données personnelles</h2>
            <p>
                Vos données sont traitées conformément à notre <Link href="/policy" className="text-blue-600 underline">Politique de Confidentialité</Link>.
                Vous pouvez accéder, modifier, exporter ou supprimer vos données à tout moment depuis votre profil.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">8. Propriété intellectuelle</h2>
            <p>
                Tous les contenus, textes, illustrations, logos et éléments de l&apos;application sont protégés par le droit d&apos;auteur.
                Toute reproduction ou utilisation non autorisée est strictement interdite.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">9. Résiliation</h2>
            <p>
                L&apos;utilisateur peut supprimer son compte à tout moment depuis les paramètres. Nous nous réservons également le droit de suspendre ou résilier un compte en cas de violation des présentes CGU.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold">10. Modifications</h2>
            <p>
                Les présentes CGU peuvent être modifiées à tout moment. Toute modification importante sera signalée dans l&apos;application.
                <br />
                <strong>Date de dernière mise à jour :</strong> 19 juillet 2025.
            </p>
        </section>
    </div>;
};

export default Page;
