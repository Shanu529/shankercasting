import React from "react";

const features = [
  {
    title: "Precision Engineering",
    icon: "/icons/2.png",
  },
  {
    title: "Industry Compliance",
    icon: "/icons/3.png",
  },
  {
    title: "Diverse Applications",
    icon: "/icons/4.png",
  },
  {
    title: "Advanced Manufacturing",
    icon: "/icons/precion-eng.png",
  },
];

function QualitySection() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-80" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
          QUALITY THAT SPEAKS
        </h2>

        <p className="text-orange-500 mt-4 text-sm md:text-lg tracking-wider uppercase">
          Strict Quality Control & Inspection
        </p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white
                         border border-gray-800
                         p-10 rounded-2xl
                         flex flex-col items-center justify-center
                         transition-all duration-500
                         hover:-translate-y-3
                         hover:border-orange-500
                         hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div
                className="w-20 h-20 flex items-center justify-center
                              rounded-full bg-gray-800
                              group-hover:bg-orange-500
                              transition duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10 object-contain
                             transition-transform duration-300
                             group-hover:scale-110"
                />
              </div>

              <h3 className="text-black font-semibold text-lg mt-6 tracking-wide">
                {item.title}
              </h3>

              <span
                className="mt-4 h-[2px] bg-orange-500
                           w-0 group-hover:w-16
                           transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QualitySection;
