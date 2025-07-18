import { Compass } from "lucide-react";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="w-full flex items-center gap-4">
                        <Image src={"/logo.png"} alt="logo" width={50} height={50} />
                        <div className="text-primary font-extrabold mt-5">LOOTOPIA</div>
                    </div>
                    <p className="text-gray-400 mb-4">
                        La plateforme de référence pour créer et participer à des chasses au trésor immersives.
                    </p>
                    <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                            <span className="text-sm font-bold">f</span>
                        </div>
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                            <span className="text-sm font-bold">t</span>
                        </div>
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                            <span className="text-sm font-bold">in</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Produit</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Communauté</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Statut</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Partenaires</a></li>
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
