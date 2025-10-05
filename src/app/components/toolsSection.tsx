'use client'
import Image from "next/image"
import { UserTools, UserToolsInterface } from "../constants/constants"
import { motion } from "framer-motion"

export const ToolsSection = () => {
    return (
        <section className="flex flex-wrap md:gap-20 gap-10 md:p-10 p-6  justify-center items-center  h-[120dvh] md:h-[100vh]   bg-[var(--terciary)]">
            {
                UserTools.map((tool: UserToolsInterface, i: number) => (

                    <motion.div key={i} className="flex justify-center items-center 
                                                   xl:w-[15rem] xl:h-[15rem] md:w-[10rem] md:h-[10rem] 
                                                   sm:h-[7rem] sm:w-[7rem] w-[5rem] h-[5rem]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 3,
                            transition: { type: "spring", stiffness: 300 },
                        }}
                    
                    >
                        <Image
                            src={tool.href}
                            alt={tool.alt}
                            width={150}
                            height={150}
                            priority
                            className=" object-contain"
                        />
                    </motion.div>
                ))
            }
        </section>
    )
}
