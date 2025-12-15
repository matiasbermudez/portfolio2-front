'use client'
import Image from "next/image";
import { motion } from "framer-motion"

import { useForm } from "react-hook-form";

type ContactForm = {
  nombre: string;
  email: string;
  mensaje: string;
};

export default function Contacto() {

  const { register, handleSubmit, reset } = useForm<ContactForm>();
  const onSubmit = async (data: ContactForm) => {
    console.log(data);
    reset();

    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

      });
      alert("Mensaje enviado, gracias por contactarme!");
      console.log(response)
    }
    catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };
  return (
    <div className=" relative flex flex-col items-center justify-start md:justify-center md:min-h-[90dvh] min-h-[80dvh] pt-20  md:pt-0 text-center">
       <h1 className="text-center text-[2.5rem] font-semibold tracking-tight">Contactame</h1>
       <div className="mx-auto md:mt-4 w-12 h-[1px] bg-[#FF5733]/70" />
      {/*Image background*/}
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
   
      <motion.div
        className="flex flex-col items-center justify-center w-full h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >

        <form action=""
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md md:max-w-lg mx-auto rounded-2xl bg-white/5 backdrop-blur-md p-8 space-y-6 md:mt-10 mt-4 "
        >

          <label htmlFor="nombre" className=" flex flex-col gap-2 text-start">
            Nombre
            <input
              {...register("nombre", { required: true })}
              type="text"
              name="nombre"
              id="nombre"
              className="input-contacto" />
          </label>

          <label htmlFor="email" className=" flex flex-col gap-2 text-start">
            Email
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="input-contacto" />
          </label>

          <label htmlFor="mensaje" className=" flex flex-col gap-2 text-start">
            Mensaje
            <textarea
              id="mensaje"
              {...register("mensaje", { required: true })}
              className=" bg-transparent border border-white/20 py-2 text-white focus:outline-none focus:border-[#FF5733]  h-[10rem] p-5 resize-none"
            >
            </textarea>
          </label>

          <motion.button
            type="submit"
            className="bg-[var(--background)] h-[3rem] w-full rounded-xl cursor-pointer hover:text-black hover:bg-[var(--primary)]"
            whileHover={{ scale: 1.01, boxShadow: "0px 0px 10px rgba(255, 87, 51, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Enviar
          </motion.button>

        </form>
      </motion.div>
    </div>
  )
}
