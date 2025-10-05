'use client'
import { motion } from "framer-motion"
import Image from "next/image"

export const HeroSection = () => {

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh]  text-center px-6 overflox-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.webp"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/94" />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.7, delay: 0.2 }}
        className="text-6xl font-bold text-white"
      >
        Hola, soy <span className="text-[#FF5733]">Matías</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-400 text-lg"
      >
        Frontend Developer con pasión por React & Next.js
      </motion.p>

      <motion.a
        href="#portfolio"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-[#FF5733] rounded-lg text-white font-semibold"
      >
        Ver mi trabajo
      </motion.a>
    </section>
  )
}
