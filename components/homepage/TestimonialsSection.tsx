import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import React from "react";

export const testimonials = [
  {
    name: "Marie Dubois",
    role: "Responsable Marketing",
    content: "Une plateforme révolutionnaire qui a transformé nos campagnes marketing en expériences immersives inoubliables.",
    rating: 5
  },
  {
    name: "Thomas Martin",
    role: "Organisateur d'événements",
    content: "Nos participants n'ont jamais été aussi engagés ! La technologie AR apporte une dimension totalement nouvelle.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    role: "Responsable RH",
    content: "Parfait pour nos team-buildings. L'interface est intuitive et les possibilités de personnalisation infinies.",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => (
  <section id="testimonials" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ils nous font confiance
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez les retours de nos utilisateurs satisfaits
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-tertiary mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-tertiary fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
