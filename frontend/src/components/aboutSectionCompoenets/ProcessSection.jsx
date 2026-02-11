import React from "react";

const processSteps = [
  {
    title: "Process One: Define",
    description:
      "We understand your component requirements, specifications, and application needs.",
    icon: "/icons/icon1.png",
  },
  {
    title: "Process Two: Estimate",
    description:
      "We evaluate material, tooling, and process feasibility with transparent costing.",
    icon: "/icons/icon2.png",
  },
  {
    title: "Process Three: Solutions",
    description:
      "We deliver precision investment cast components using optimized processes.",
    icon: "/icons/icon23.png",
  },
];

function ProcessSection() {
  const facilityImage = "/aboutImages/facility.png";

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white shadow-lg rounded-xl p-8 sm:p-10 border-b-4 border-[#000]">
            <h3 className="font-semibold text-lg text-center">
              Well-equipped Manufacturing Facility
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-center">
              Our manufacturing facility is powered by advanced machinery and
              modern technology, ensuring precision, consistency, and high
              production efficiency. With streamlined processes and
              industry-grade equipment, we deliver products that meet strict
              quality standards while maintaining fast turnaround times.
            </p>

            <h3 className="font-semibold text-lg text-center mt-8">
              Research & Development Department
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-center">
              Our dedicated R&D department focuses on continuous innovation and
              product enhancement. By combining market insights, technical
              expertise, and cutting-edge research, we consistently develop
              improved solutions that meet evolving customer needs and stay
              ahead of industry trends.
            </p>
          </div>

          <div className="w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={facilityImage}
              alt="Manufacturing Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-8 text-center
                         hover:shadow-xl transition duration-300"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="mx-auto h-14 mb-4"
              />

              <h4 className="font-semibold">{step.title}</h4>

              <p className="text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
