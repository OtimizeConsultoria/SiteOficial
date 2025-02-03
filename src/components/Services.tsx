import { Award, DollarSign, Factory, FolderDown, Truck } from 'lucide-react'
import React from 'react'

const Services = () => {
    const services = [
        {
            category: "Gestão Estratégica",
            icon: <Award className="w-12 h-12 text-primary" />,
            services: [
                { title: "Plano de negócios" },
                { title: "Planejamento estratégico" },
                { title: "Estratégia de posicionamento no mercado" }
            ]
        },
        {
            category: "Gestão de processos",
            icon: <FolderDown className="w-12 h-12 text-primary" />,
            services: [
                { title: "Mapeamento" },
                { title: "Otimização" },
                { title: "Padronização" }
            ]
        },
        {
            category: "Gestão da produção",
            icon: <Factory className="w-12 h-12 text-primary" />, // Ícone que remete à produção industrial e layout fabril
            services: [
                { title: "Estudo da produção" },
                { title: "Estudo de layout" }
            ]
        },
        {
            category: "Gestão financeira",
            icon: <DollarSign className="w-12 h-12 text-primary" />, // Representa dinheiro e finanças
            services: [
                { title: "Análise e estruturação financeira" },
                { title: "Treinamento de gestão financeira" }
            ]
        },
        {
            category: "Gestão de logística",
            icon: <Truck className="w-12 h-12 text-primary" />, // Ícone de caminhão para simbolizar transporte e logística
            services: [
                { title: "Análise e controle de estoque" },
                { title: "Viabilidade de Mercado" }
            ]
        }
    ]

    return (
        <>
            {/* Services */}

            <section id="servicos" className="py-16 bg-muted bg-gray-50 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Nossos Serviços
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group relative h-64 w-96 [perspective:1000px]">
                                <div className="absolute duration-500 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* front */}
                                    <div
                                        className="flex flex-col justify-center items-center gap-5 absolute w-full h-full rounded-xl text-white [backface-visibility:hidden] bg-white p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-up"
                                    >
                                        {service.icon}
                                        <h3 className="text-black text-xl">{service.category}</h3>
                                    </div>

                                    {/* back */}
                                    <div className="absolute w-full h-full rounded-xl bg-gradient-to-br bg-white p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center gap-3 text-center shadow-md hover:shadow-lg transition-shadow animate-fade-up">
                                        {service.icon}
                                        {service.services.map((serv, index) => (
                                            <p key={index} className="text-black flex text-lg">
                                                {serv.title}
                                            </p>
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
