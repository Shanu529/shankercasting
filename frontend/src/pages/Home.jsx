import { useEffect, useState } from "react";
import AboutSection from "../components/HomePageComponentes/AboutSection";
import QualitySection from "../components/HomePageComponentes/QualitySection";
import ProcessPreview from "../components/HomePageComponentes/ProcessPreview";
import IndustriesSection from "../components/HomePageComponentes/IndustriesSection";
import ContactSection from "../components/HomePageComponentes/ContactSection";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const slides = [
    "/slider/hero1.png",
    "/slider/hero2.png",
    "/slider/hero3.png",
  ];

  const [currentt, setCurrentt] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentt((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const [current, setCurrent] = useState(0);

  // Aaauto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center
                  transition-opacity duration-[1200ms] ease-in-out
                  ${index === current ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/0" />

        <div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12
                  flex items-center min-h-screen"
        >
          <div className="w-full max-w-3xl">
            <h1
              className="text-white font-extrabold leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              HIGH QUALITY INDUSTRIAL
              <span className="block mt-3 text-orange-500">
                PRECISION CASTING SOLUTIONS
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Delivering superior engineering excellence with precision,
              reliability, and advanced manufacturing standards tailored for
              modern industrial demands.
            </p>

            <ul
              className="mt-8 grid grid-cols-1 sm:grid-cols-2
                     gap-y-4 gap-x-10 text-gray-200 text-sm md:text-base"
            >
              {[
                "Experienced Specialists",
                "Reliable Delivery",
                "Advanced Quality Control",
                "Stringent Process Control",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className=" mt-5 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                className="bg-orange-500 hover:bg-orange-600
                     px-8 py-3 sm:px-10 sm:py-4
                     rounded-full text-white font-semibold
                     shadow-lg hover:shadow-orange-500/40
                     transition duration-300 hover:scale-105"
              >
                GET A FAST QUOTE
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="border border-white/30 text-white
                     px-8 py-3 sm:px-10 sm:py-4
                     rounded-full hover:bg-white hover:text-black
                     transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Arrowsss - hidden on Mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2
               bg-black/60 hover:bg-orange-500
               text-white text-3xl
               w-12 h-12 rounded-full
               items-center justify-center
               transition duration-300 z-20"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2
               bg-black/60 hover:bg-orange-500
               text-white text-3xl
               w-12 h-12 rounded-full
               items-center justify-center
               transition duration-300 z-20"
        >
          ›
        </button>

        {/* dots */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2
                  flex gap-3 z-20"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300
          ${
            i === current
              ? "w-8 bg-orange-500"
              : "w-2 bg-white/40 hover:bg-white/70"
          }`}
            />
          ))}
        </div>
      </section>

      <QualitySection />
      <AboutSection />
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Subtle Industrial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
          {/* Small Accent Line */}
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-16 bg-orange-500 rounded-full" />
          </div>

          {/* Main Title */}
          <h2
            className="text-white font-extrabold tracking-widest
                   text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            QUALITY THAT SPEAKS
          </h2>

          {/* Subtitle */}
          <p
            className="mt-8 text-gray-300
                 text-sm sm:text-base md:text-lg
                 max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            Strict Quality Control & Inspection
          </p>

          {/* Bottom Decorative Line */}
          <div className="mt-10 flex justify-center">
            <div className="h-[3px] w-24 bg-orange-500 rounded-full" />
          </div>
        </div>
      </section>

      <ProcessPreview />
      <IndustriesSection />
      <ContactSection />
    </>
  );
};

export default Hero;
