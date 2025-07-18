import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, MapPin, Users, Trophy } from "lucide-react";
import React from "react";

export const features = [
  {
    icon: <Eye className="w-8 h-8 text-primary" />, 
    title: "Réalité Augmentée",
    description: "Explorez des mondes virtuels superposés à la réalité grâce à la technologie AR avancée."
  },
  {
    icon: <MapPin className="w-8 h-8 text-secondary" />, 
    title: "Géolocalisation",
    description: "Trouvez les trésors cachés avec un système de géolocalisation précis et en temps réel."
  },
  {
    icon: <Users className="w-8 h-8 text-tertiary" />, 
    title: "Multijoueur",
    description: "Participez à des chasses collaboratives ou affrontez d'autres équipes."
  },
  {
    icon: <Trophy className="w-8 h-8 text-primary" />, 
    title: "Récompenses",
    description: "Gagnez des points, débloquez des achievements et gravissez les classements."
  }
];

const FeaturesSection: React.FC = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Fonctionnalités innovantes
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez les technologies qui rendent chaque chasse au trésor unique et mémorable
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
