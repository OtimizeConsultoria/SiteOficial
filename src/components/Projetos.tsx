import React from 'react'

const Projetos = () => {

    const projects = [
        {
          title: "Otimização de Processos",
          description: "Redução de 30% no tempo de produção para indústria têxtil",
          image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Gestão de Qualidade",
          description: "Implementação de sistema ISO 9001 em empresa de médio porte",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Planejamento Estratégico",
          description: "Desenvolvimento de plano estratégico para startup em crescimento",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        },
      ];

    return (
        <>
            <section id="projetos" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Nossos Projetos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Projetos
