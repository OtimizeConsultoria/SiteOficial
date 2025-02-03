import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';


const CarrosselCompany = () => {
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


    return (
        <>
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
        </>
    )
}

export default CarrosselCompany
