import Image from "next/image";


export default function Contacto() {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh]">
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
      Hola soy pagina de contacto pts
    </div>
  )
}
