"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ChevronDown, ChevronUp, Hammer, Menu, Pickaxe, X } from 'lucide-react';
import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';

const Page = () => {
    function scrollToSection(id: string) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }


    /* NavBar */
    const [isOpen, setIsOpen] = useState(false);
    const params = useParams() as { id: string };
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const project = projects.find((project) => project.id === +params.id)!;


    return (
        <div className='min-h-screen bg-background'>
            {/* NavBar */}
            <nav className=" w-full  bg-neutralGray backdrop-blur-sm z-50 shadow-sm ">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link href={"/"} onClick={() => scrollToSection("inicio")} className="text-2xl font-bold text-primary">
                            <Image src={"/imgs/logo.png"} alt='logo Otimize' height={75} width={75} />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <Link href={"/"} className="text-foreground text-white font-bold hover:text-primary transition-colors">
                                Inicio
                            </Link>

                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden py-4 animate-fade-down">
                            <div className="flex flex-col space-y-4">
                                <Link href={"/"} className="text-foreground text-white font-bold hover:text-primary transition-colors">
                                    Início
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <section
                style={{ backgroundImage: `url(${project.image})` }}
                className='relative bg-bottom bg-cover bg-no-repeat bg-fixed h-[30vh] w-full mx-auto flex justify-center items-center opacity-80'
            >
                <h1 className='absolute z-10 text-4xl md:text-6xl font-bold text-center text-white drop-shadow-2xl'>{project.title}</h1>
            </section>

            <section className='w-full py-10 flex flex-col gap-5'>
                <h2 className='text-2xl md:text-3xl font-bold text-center my-8s w-fit mx-auto flex justify-center items-center gap-5'><Hammer size={30} className='text-primary' /> Projetos Feitos <Pickaxe size={30} className='text-primary' /></h2>

                <div className='container mx-auto px-4 flex flex-col gap-5'>
                    <div className='w-[95%] sm:w-[75%] mx-auto flex flex-col gap-5'>
                        {project.sub_projects.sort((a, b) => b.data - a.data).map((sub_project, index) => (
                            <div
                                key={index}
                                className="p-4 flex flex-col gap-4 rounded-2xl shadow-lg bg-white text-black transition-all hover:shadow-xl"
                            >
                                {/* Nome da Empresa + Botão de Expandir */}
                                <button className="flex justify-between items-center gap-2" onClick={() => setOpenIndex(openIndex === index ? null : index)}>

                                    <h3 className="text-md font-semibold w-full text-start">{sub_project.title}</h3>

                                    <i
                                        className="p-2 rounded-full bg-primary hover:bg-secondary text-white transition-all"
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    >
                                        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </i>
                                </button>

                                {/* Informações do projeto (abre ao clicar) */}
                                {openIndex === index && (
                                    <div className="border-t pt-4 space-y-2 animate-fadeIn">
                                        <p className=" text-sm text-gray-500">
                                            <span className='font-semibold text-black'>Resumo:</span> {sub_project.description}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-semibold text-red-600">Problema:</span> {sub_project.problema}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-semibold text-green-600">Benefícios:</span> {sub_project.beneficios}
                                        </p>
                                        {sub_project.data && (
                                            <p className="text-xs text-gray-400">Data: {sub_project.data}</p>
                                        )}
                                    </div>
                                )}
                            </div>

                        ))}


                    </div>


                </div>


            </section>








        </div>
    )
}

export default Page
