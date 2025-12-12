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
    <div className="relative flex flex-col items-center justify-center min-h-[90dvh]  text-center  overflox-hidden">
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
          className="flex flex-col  md:py-10 sm:p-10 p-5 gap-5 justify-between md:text-xl text-lg z-10 bg-[var(--terciary)]/90 
        shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-sm w-[90%] xl:w-[50%] sm:w-[70%] md:h-[70dvh] rounded-xl"
        >

          <label htmlFor="nombre" className=" flex flex-col gap-2 text-start">
            Nombre
            <input
              {...register("nombre", { required: true })}
              type="text"
              name="nombre"
              id="nombre"
              className="input-contact h-[4rem]" />
          </label>

          <label htmlFor="email" className=" flex flex-col gap-2 text-start">
            Email
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="input-contact h-[4rem]" />
          </label>

          <label htmlFor="mensaje" className=" flex flex-col gap-2 text-start">
            Mensaje
            <textarea
              id="mensaje"
              {...register("mensaje", { required: true })}
              className="input-contact  h-[10rem] p-5 resize-none"
            >
            </textarea>
          </label>

          <motion.button
            type="submit"
            className="bg-[var(--background)] h-[4rem] pl-5 rounded-xl cursor-pointer hover:text-black hover:bg-[var(--primary)]"
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
