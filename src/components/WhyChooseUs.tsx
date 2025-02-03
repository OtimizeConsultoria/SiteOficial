import { Award, Lightbulb, TrendingUp, Users } from 'lucide-react';
import React from 'react'

const WhyChooseUs = () => {
    /* WhyChooseUs */

    const reasons = [
        {
            icon: <Award className="w-12 h-12 text-primary" />,
            title: "Experiência Acadêmica",
            description: "Conhecimento técnico atualizado e suporte da universidade.",
        },
        {
            icon: <Users className="w-12 h-12 text-primary" />,
            title: "Equipe Dedicada",
            description: "Profissionais comprometidos com seu sucesso.",
        },
        {
            icon: <Lightbulb className="w-12 h-12 text-primary" />,
            title: "Soluções Inovadoras",
            description: "Abordagem criativa para resolver problemas complexos.",
        },
        {
            icon: <TrendingUp className="w-12 h-12 text-primary" />,
            title: "Resultados Comprovados",
            description: "Histórico de projetos bem-sucedidos.",
        },
    ];

    return (
        <>
            {/* WhyChooseUs */}
            <section id="porque-nos-escolher" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Por Que Nos Escolher?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex justify-center mb-4">{reason.icon}</div>
                                <h3 className="text-xl font-semibold text-center mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 text-center">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs
