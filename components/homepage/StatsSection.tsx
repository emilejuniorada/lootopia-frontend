import React from "react";

const StatsSection: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-gray-900">
                <div>
                    <div className="text-4xl font-bold mb-2">10K+</div>
                    <div className="text-gray-600">Utilisateurs actifs</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-gray-600">Chasses créées</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <div className="text-gray-600">Satisfaction</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-gray-600">Support</div>
                </div>
            </div>
        </div>
    </section>
);

export default StatsSection;
