"use client"

import { useEffect, useState } from "react";
import { ArrowRight, Award, CheckCircle, DollarSign, Factory, FolderDown, Lightbulb, Menu, TrendingUp, Truck, Users, X } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';


export default function Home() {
  /* NavBar */
  const [isOpen, setIsOpen] = useState(false);

  /* hero */

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

  /* Services */
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

  /* Projetos */
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

  /* CarrosselCompany */
  const sponsors = [ // 16
    '/imgs/company/logo1.jpg',
    '/imgs/company/logo2.jpg',
    '/imgs/company/logo3.jpg',
    '/imgs/company/logo4.jpg',
    '/imgs/company/logo1.jpg',
    '/imgs/company/logo2.jpg',
    '/imgs/company/logo3.jpg',
    '/imgs/company/logo4.jpg',
    '/imgs/company/logo1.jpg',
    '/imgs/company/logo2.jpg',
    '/imgs/company/logo3.jpg',
    '/imgs/company/logo4.jpg',
    '/imgs/company/logo1.jpg',
    '/imgs/company/logo2.jpg',
    '/imgs/company/logo3.jpg',
    '/imgs/company/logo4.jpg',
  ];


  /* AboutUs */
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
    <div className="min-h-screen bg-background">
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

      {/* Hero */}
      <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Transformando ideias em{" "}
                <span className="text-primary">soluções eficientes</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Somos uma empresa júnior de engenharia de produção comprometida em
                trazer inovação e eficiência para o seu negócio.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Fale Conosco
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="flex-1 ">
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

      {/* Projetos */}
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

      {/* CarrosselCompany */}
      <div className="overflow-hidden w-full bg-primary py-6">
        <motion.div
          className="flex gap-8 w-full"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
            delay: 0
          }}
        >
          {[...sponsors, ...sponsors].map((src, index) => (
            <Image key={index} src={src} width={300} height={300} alt="fotos otimize" className="h-16 w-auto object-contain" />
          ))}
        </motion.div>
      </div>

      {/* About Us */}
      <section id="sobre" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImage ? 1 : 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                  />
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}