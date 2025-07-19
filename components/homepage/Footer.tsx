import { Compass } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4 col-span-3">
                    <div className="w-full flex items-center gap-4">
                        <Image src={"/logo.png"} alt="logo" width={50} height={50} />
                        <div className="text-primary font-extrabold mt-5">LOOTOPIA</div>
                    </div>
                    <p className="text-gray-400 mb-4">
                        La plateforme de référence pour créer et participer à des chasses au trésor immersives.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Accès rapide</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq">
                                Foire aux questions
                            </Link>
                        </li>
                        <li>
                            <Link href="/policy">
                                Politique de confidentialité
                            </Link>
                        </li>
                        <li>
                            <Link href="/cgu">
                                Conditions d'utilisation
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Lootopia. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
