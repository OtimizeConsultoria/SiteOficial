"use client"
import { Award, Check, DollarSign, Factory, FolderDown } from 'lucide-react'
import React from 'react'

const Services = () => {

    const services = [
        {
            category: "Gestão de processos",
            icon: <FolderDown className="w-12 h-12 text-primary" />,
            services: [
                {
                    title: "Mapeamento De Processos",
                    subcategories: [
                        "Padronização",
                        "Otimização",
                        "Lean Manufacturing",
                        "Estudo de tempos e movimentos"
                    ]
                },
                { title: "Análise de Processos", subcategories: [] }
            ]
        },
        {
            category: "Gestão Estratégica",
            icon: <Award className="w-12 h-12 text-primary" />,
            services: [
                { title: "Plano de negócios", subcategories: [] },
                { title: "Planejamento estratégico", subcategories: [] },
                { title: "Posicionamento no mercado", subcategories: [] },
                { title: "Modelo de Gestão", subcategories: [] }
            ]
        },
        {
            category: "Gestão da produção",
            icon: <Factory className="w-12 h-12 text-primary" />,
            services: [
                {
                    title: "Estudo de Layout",
                    subcategories: []
                },
                {
                    title: "Análise e Controle de Estoque",
                    subcategories: ["Previsão de demanda", "Contagem"]
                },
                {
                    title: "Gestão da Qualidade",
                    subcategories: ["Auditoria", "CEQ"]
                }
            ]
        },
        {
            category: "Gestão financeira",
            icon: <DollarSign className="w-12 h-12 text-primary" />,
            services: [
                { title: "Análise e estruturação financeira", subcategories: [] },
                { title: "Treinamento de gestão financeira", subcategories: [] },
                { title: "Análise de Custos", subcategories: [] }
            ]
        }
    ];

    return (
        <>
            {/* Services */}
            {/* tipo 01 */}
            <section id="servicos" className="py-16 bg-muted bg-gray-50 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Nossos Serviços
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-16 2xl:gap-10">
                        {services.map((service, index) => (
                            <div key={index} className="group relative h-64 w-96 [perspective:1000px]">
                                <div className="absolute duration-500 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* front */}
                                    <div className="flex flex-col justify-center items-center gap-5 absolute w-full h-full rounded-xl text-white [backface-visibility:hidden] bg-white p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-up">
                                        {service.icon}
                                        <h3 className="text-black text-xl">{service.category}</h3>
                                    </div>

                                    {/* back */}
                                    <div className="absolute w-full h-full rounded-xl bg-gradient-to-br bg-white p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center gap-3 text-center shadow-md hover:shadow-lg transition-shadow animate-fade-up">
                                        <div className='absolute top-2 left-2'>
                                            {service.icon}
                                        </div>

                                        {service.services.map((serv, i) => (
                                            <div key={i} className="text-black ">
                                                <p className='flex gap-2'><Check className='text-green-500' />{serv.title}</p>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
