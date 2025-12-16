'use client'
import Image from "next/image"
import { UserTools, UserToolsInterface } from "../constants/constants"
import { motion } from "framer-motion"

export const ToolsSection = () => {
    return (
        <section className="flex flex-wrap justify-center items-start md:gap-20 gap-10 md:p-10 p-6    h-[100dvh]  min-h-[100dvh] md:min-h-auto  bg-[var(--terciary)]">
            {
                UserTools.map((tool: UserToolsInterface, i: number) => (

                    <motion.div
                        key={i}
                        className="
                                      flex justify-center items-center
                                      xl:w-[14rem] xl:h-[14rem]
                                      md:w-[10rem] md:h-[10rem]
                                      sm:w-[7rem] sm:h-[7rem]
                                      w-[5rem] h-[5rem]
                                      overflow-hidden
                                    "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotate: 3,
                                transition: { type: "spring", stiffness: 300 },
                            }}
                            className="flex items-center justify-center w-full h-full"
                        >
                            <Image
                                src={tool.href}
                                alt={tool.alt}
                                width={150}
                                height={150}
                                className="object-contain max-w-full max-h-full"
                            />
                        </motion.div>
                    </motion.div>
                ))
            }
        </section>
    )
}
