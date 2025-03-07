import React from 'react'
import Image from 'next/image';

const CarrosselCompany = () => {
    const sponsors = [ // 6
        "/imgs/company/AUniao.png",
        "/imgs/company/CasaLima.png",
        "/imgs/company/CimentoElizabeth.png",
        "/imgs/company/GermanoHolanda.png",
        "/imgs/company/Insano.png",
        "/imgs/company/Verdemix.png",
    ];

    return (
        <>
            <div className="overflow-hidden w-full bg-primary py-6">
                <div className="flex gap-8 w-max animate-scroll">
                    {sponsors.map((src, index) => (
                        <Image key={index} src={src} width={300} height={300} alt="fotos otimize" className="h-16 w-auto object-contain" />
                    ))}
                    {sponsors.map((src, index) => (
                        <Image key={`dup-${index}`} src={src} width={300} height={300} alt="fotos otimize" className="h-16 w-auto object-contain" />
                    ))}
                    {sponsors.map((src, index) => (
                        <Image key={`dup-${index}`} src={src} width={300} height={300} alt="fotos otimize" className="h-16 w-auto object-contain" />
                    ))}
                    {sponsors.map((src, index) => (
                        <Image key={`dup-${index}`} src={src} width={300} height={300} alt="fotos otimize" className="h-16 w-auto object-contain" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CarrosselCompany
