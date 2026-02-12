import React from "react";
import { useNavigate } from "react-router-dom";
// import aboutImage from "./about-image.jpg";
function AboutSection() {
  const Navigate = useNavigate();
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ABOUT US
            </h2>

            <p className="text-orange-500 text-lg mt-4">
              Precision Manufacturing That Powers Modern Industries
            </p>

            <p className="text-gray-700 mt-6 leading-relaxed">
              We manufacture precision investment castings from a few grams to
              70 kg per piece, adhering to Indian and international standards.
              Our products serve diverse industries including automotive,
              agriculture, PED-compliant valves, pump impellers, pipe fittings,
              power generation, defense, medical equipment, and marine
              applications.
            </p>

            <button
              onClick={() => Navigate("/contact")}
              className="mt-6 text-orange-500 font-semibold flex items-center gap-2 group"
            >
              <span className="w-8 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-12" />
              Read More About Us
            </button>
          </div>

          <div className="w-full overflow-hidden rounded-md">
            <img
              src="/img2.png"
              alt="Casting process"
              className="w-full h-full object-cover rounded-md shadow-lg
               transition-transform duration-700 ease-in-out
               hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
