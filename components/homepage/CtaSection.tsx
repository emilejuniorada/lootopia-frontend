import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const CtaSection: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary mb-6">
          Prêt à créer votre première chasse au trésor ?
        </h2>
                <p className="text-xl text-secondary/90 mb-8">
          Rejoignez des milliers d'organisateurs qui utilisent déjà notre plateforme
          pour créer des expériences inoubliables.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/register'>
            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 px-8 py-6 text-lg">
              Commencer gratuitement
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;
