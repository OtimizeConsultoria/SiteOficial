import Link from 'next/link';
import React from 'react'
import { projects } from "@/data/projects";
import Image from 'next/image';

const Projetos = () => {


    return (
        <>
            <section id="projetos" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Nossos Projetos
                    </h2>
                    <div className="flex flex-wrap justify-center gap-16">
                        {projects.map((project, index) => (
                            <Link
                                key={index}
                                href={`/projetos/${project.id}`}
                                className="w-96 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Projetos
