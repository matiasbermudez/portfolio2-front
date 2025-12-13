import React from 'react'
import { timeline } from "../constants/constants";
const timeLineComp = () => {
  return (
     <div className="w-full max-w-6xl mx-auto mt-20">
            <div className=" flex flex-col md:flex-row md:items-start md:justify-between gap-12 relative">
                {timeline.map((item, i) => (
                    <div key={i} className="relative flex md:flex-col items-start md:items-center gap-4">

                        {/* Punto */}
                        <div className="w-3 h-3 rounded-full bg-[#FF5733] shrink-0mt-1 md:mt-0" />

                        {/* Texto */}
                        <div className="md:text-center max-w-xs">
                            <h4 className="text-white font-semibold text-lg">
                                {item.title}
                            </h4>
                            <p className="text-white/60 text-sm mt-1">
                                {item.text}
                            </p>
                        </div>

                    </div>
                ))}

                {/* Línea */}
                <span className="absolute left-[6px] top-0 w-[1px] h-full bg-[#FF5733]/30 md:left-0 md:top-[6px] md:w-full md:h-[1px]" />
            </div>

        </div>
  )
}

export default timeLineComp