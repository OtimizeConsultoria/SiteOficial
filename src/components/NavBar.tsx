"use client"
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const NavBar = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
    /* NavBar */
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full  bg-neutralGray backdrop-blur-sm z-50 shadow-sm ">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <button onClick={() => scrollToSection("inicio")} className="text-2xl font-bold text-primary">
                        <Image src={"/imgs/logo.png"} alt='logo Otimize' height={75} width={75} />
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection("inicio")} className="text-foreground text-white font-bold hover:text-primary transition-colors">
                            Inicio
                        </button>
                        <button onClick={() => scrollToSection("servicos")} className="text-foreground text-white font-bold hover:text-primary transition-colors">
                            Serviço
                        </button>
                        <button onClick={() => scrollToSection("sobre")} className="text-foreground text-white font-bold hover:text-primary transition-colors">
                            Sobre
                        </button>
                        <a href="https://api.whatsapp.com/send/?phone=558388087462&text&type=phone_number&app_absent=0" target="_blank" className="text-foreground text-white font-bold hover:text-primary transition-colors">
                            Contato
                        </a>
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
                            <button onClick={() => { setIsOpen(false); scrollToSection("inicio") }} className="text-foreground text-white font-bold hover:text-primary transition-colors">
                                Início
                            </button>

                            <button onClick={() => { setIsOpen(false); scrollToSection("servicos") }} className="text-foreground text-white font-bold hover:text-primary transition-colors">
                                Serviços
                            </button>

                            <button onClick={() => { setIsOpen(false); scrollToSection("sobre") }} className="text-foreground text-white font-bold hover:text-primary transition-colors">
                                Sobre
                            </button>

                            <a href="https://api.whatsapp.com/send/?phone=558388087462&text&type=phone_number&app_absent=0" target="_blank" className="text-foreground text-white font-bold hover:text-primary transition-colors mx-auto">
                                Contato
                            </a>

                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
