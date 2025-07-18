import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Camera, Smartphone, Globe, Zap } from "lucide-react";
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => (
    <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
            <Badge className="mb-6 bg-tertiary/10 text-tertiary hover:bg-tertiary/20">
                🎯 Plateforme innovante de chasses au trésor
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
                Découvrez l'univers des
                <span
                    className="bg-clip-text text-transparent px-2"
                    style={{
                        backgroundImage: "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)"
                    }}
                >
                    chasses au trésor
                </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Une plateforme immersive qui transforme la réalité en terrain de jeu.
                Créez, participez et organisez des chasses au trésor enrichies par la réalité augmentée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href='/register'>
                    <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-6 text-lg">
                        <Play className="w-5 h-5 mr-2" />
                        Commencer l'aventure
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Application Mobile</h3>
                    <p className="text-gray-600">Fonctionnalités AR avancées</p>
                </div>
                <div className="text-center">
                    <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Version Web</h3>
                    <p className="text-gray-600">Interface responsive complète</p>
                </div>
                <div className="text-center">
                    <div className="bg-tertiary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-tertiary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Temps Réel</h3>
                    <p className="text-gray-600">Expérience synchronisée</p>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
