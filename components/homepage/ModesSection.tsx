import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Eye, MapPin, Zap, Wifi, Globe, Users, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const ModesSection: React.FC = () => (
  <section id="modes" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Deux modes d'expérience
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choisissez le mode qui correspond à vos besoins et à votre équipement
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Mode Semi-Virtuel</h3>
              <Badge className="mt-2 bg-primary/10 text-primary">Recommandé</Badge>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Exploitez toute la puissance de votre smartphone avec les capteurs,
            la réalité augmentée et la géolocalisation en temps réel.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <Eye className="w-5 h-5 text-primary mr-3" />
              <span>Réalité Augmentée immersive</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 text-primary mr-3" />
              <span>Géolocalisation précise</span>
            </li>
            <li className="flex items-center">
              <Zap className="w-5 h-5 text-primary mr-3" />
              <span>Capteurs intégrés</span>
            </li>
          </ul>
        </Card>
        <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-secondary/10 p-3 rounded-lg mr-4">
              <Wifi className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Mode Connecté</h3>
              <Badge className="mt-2 bg-secondary/10 text-secondary">Accessible</Badge>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Une expérience simplifiée accessible depuis n'importe quel appareil
            connecté à Internet, idéale pour tous les publics.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <Globe className="w-5 h-5 text-secondary mr-3" />
              <span>Compatible tous appareils</span>
            </li>
            <li className="flex items-center">
              <Users className="w-5 h-5 text-secondary mr-3" />
              <span>Multijoueur simplifié</span>
            </li>
            <li className="flex items-center">
              <Trophy className="w-5 h-5 text-secondary mr-3" />
              <span>Système de récompenses</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export default ModesSection;
