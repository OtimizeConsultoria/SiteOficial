"use client"
import React, { useEffect, useState } from 'react'
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
    const images = [
        {
            src: "/imgs/turmaOtimize/imagem1.svg",
            alt: "turma 01"
        },
        {
            src: "/imgs/turmaOtimize/imagem2.svg",
            alt: "turma 02"
        },
        {
            src: "/imgs/turmaOtimize/imagem3.svg",
            alt: "turma 03"
        },
        {
            src: "/imgs/turmaOtimize/imagem4.svg",
            alt: "turma 04"
        },
        {
            src: "/imgs/turmaOtimize/imagem5.svg",
            alt: "turma 05"
        }
    ]

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <>
            <section id="sobre" className="py-16">
                <div className="container mx-auto px-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                        <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-start">
                            <h2 className="text-3xl md:text-4xl font-bold">Sobre Nós</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Somos uma empresa júnior de Engenharia de Produção comprometida em
                                trazer soluções inovadoras e eficientes para nossos clientes. Nossa
                                equipe é formada por estudantes altamente capacitados e orientados
                                por professores experientes.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-primary w-6 h-6" />
                                    <span>Projetos supervisionados por professores</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-primary w-6 h-6" />
                                    <span>Metodologias atualizadas e inovadoras</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-primary w-6 h-6" />
                                    <span>Compromisso com resultados</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full aspect-[16/9] overflow-hidden  ">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 w-full h-full flex justify-center items-center md:justify-start transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <Image src={image.src} alt={image.alt} width={500} height={500} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
