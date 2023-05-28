import { useState, useEffect } from "react"
//import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div>
      <div className="lg:text-5xl md:text-4xl xs:text-3xl text-center font-playfair text-rose-300 pb-10">
          MOMENTS OF HOPE: OUR JOURN
      </div>

      <div className="overflow-hidden relative h-full rounded-2xl">
      <div
        className="flex transition-transform ease-out duration-500 w-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-4 top-1/2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          {/* <ChevronLeft size={40} /> */}
          ❰❰
        </button>
        <button
          onClick={next}
          className="p-4 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
        {/* <ChevronRight size={40} /> */}
        ❱❱
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-black rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    
  )
}