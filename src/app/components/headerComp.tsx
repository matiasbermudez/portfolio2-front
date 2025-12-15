'use client'
import Image from "next/image"
import { MenuItems, MenuItemInterface } from "../constants/constants"
import Link from "next/link"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HeaderComp = () => {
  const [isActive, setIsActive] = useState(false);
  const MotionLink = motion(Link);
  const madeClick = () => {
    setIsActive(false);
  }
  return (
    <header className="flex flex-col  items-start  w-full px-4 py-2 md:flex-row md:items-center md:justify-between  
                      sticky  z-999999 top-0 bg-opacity-50 bg-black/90">
      <MotionLink
        href={'/'}
        className=" "
        whileHover={{ scale: 1.1, color: "#FF5733" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src="/logo2.webp"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain m-2 md:ml-10 ml-4"
        />
      </MotionLink>

      <nav className="hidden md:flex md:flex-row   lg:gap-40 md:gap-20 mr-20">
        {MenuItems.map((item: MenuItemInterface, i: number) => (
          <MotionLink
            key={i}
            href={item.href}
            className=" text-lg inline-block"
            whileHover={{ scale: 1.1, color: "#FF5733" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {item.name}
          </MotionLink>
        ))}
      </nav>

      <button
        className={`button burger-menu flex flex-col justify-center items-center   md:hidden
              ${isActive ? "burger-menu-active" : ""}`
        }
        onClick={() => { setIsActive(!isActive) }}>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 50 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              type: "spring",
              damping: 15,
              bounce: 1.5,
              stiffness: 200
            }}
            className="absolute top-[3rem] left-0 w-full flex flex-col gap-6 bg-black p-6 md:hidden z-50"
          >
            {MenuItems.map((item: MenuItemInterface, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <MotionLink
                  key={i}
                  href={item.href}
                  className=" text-2xl pl-2 mt-5 inline-block"
                  whileHover={{ scale: 1.1, color: "#FF5733" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={madeClick}
                >
                  {item.name}
                </MotionLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
