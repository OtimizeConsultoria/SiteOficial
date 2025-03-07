import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <>
            {/* Hero */}
            <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Transformando ideias em{" "}
                                <span className="text-primary">soluções eficientes</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Somos uma empresa júnior de engenharia de produção comprometida em
                                trazer inovação e eficiência para o seu negócio.
                            </p>
                            <a
                                href="https://api.whatsapp.com/send/?phone=558388087462&text&type=phone_number&app_absent=0"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Fale Conosco
                                <ArrowRight size={20} />
                            </a>
                        </div>
                        <div className="">
                            <Image
                                src="/imgs/hero.jpg"
                                alt="Ilustração"
                                className="rounded-lg shadow-xl w-full"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
