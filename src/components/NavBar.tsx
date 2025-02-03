"use client"
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* NavBar */}
            <nav className="fixed w-full  bg-neutralGray backdrop-blur-sm z-50 shadow-sm ">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <a href="#" className="text-2xl font-bold text-primary">
                            <Image src={"/imgs/logo.png"} alt='logo Otimize' height={75} width={75} />
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#inicio" className="text-foreground text-white font-bold hover:text-primary transition-colors">
                                Início
                            </a>
                            <a href="#servicos" className="text-foreground text-white font-bold hover:text-primary transition-colors">
                                Serviços
                            </a>
                            <a href="#sobre" className="text-foreground text-white font-bold hover:text-primary transition-colors">
                                Sobre
                            </a>
                            <a href="#contato" className="text-foreground text-white font-bold hover:text-primary transition-colors">
                                Contato
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden py-4 animate-fade-down">
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="#inicio"
                                    className="text-foreground text-white font-bold hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Início
                                </a>
                                <a
                                    href="#servicos"
                                    className="text-foreground text-white font-bold hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Serviços
                                </a>
                                <a
                                    href="#sobre"
                                    className="text-foreground text-white font-bold hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sobre
                                </a>
                                <a
                                    href="#contato"
                                    className="text-foreground text-white font-bold hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contato
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>

    )
}

export default NavBar
