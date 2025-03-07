
"use client"
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projetos from "@/components/Projetos";
import CarrosselCompany from "@/components/CarrosselCompany";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Services from "@/components/Services";


export default function Home() {
  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar scrollToSection={scrollToSection} />

      <Hero />

      <WhyChooseUs />

      <Services/>

      <Projetos/>

      <CarrosselCompany/>

      <AboutUs/>

      <Footer scrollToSection={scrollToSection}/>

    </div>
  );
}