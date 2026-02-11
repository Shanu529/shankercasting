import React from "react";
// import Navbar from "../components/layout/Navbar";
import ProcessSection from "../components/aboutSectionCompoenets/ProcessSection";

function About() {
  // const img = "../../public/aboutImages/bgimg.png";
  const img = "/aboutImages/bgimg.png";
  return (
    <>
      <section
        className="
      
      relative h-[50vh] md:min-h-[60vh] w-full overflow-hidden"
      >
        <div
          className={`absolute 
            
            inset-0 bg-cover bg-center `}
          style={{ backgroundImage: `url(${img})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mt-24 max-w-2xl">
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl">
              ABOUT US
            </h1>
          </div>
        </div>
      </section>

      <ProcessSection />
    </>
  );
}

export default About;
