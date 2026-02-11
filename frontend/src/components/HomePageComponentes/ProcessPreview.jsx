

const processes = [
  {
    title: "CAD",
    img: "/CAD.png",
    desc: "Computer-aided design for precise pattern and component engineering before manufacturing.",
  },
  {
    title: "Simulation",
    img: "/Simulation.png",
    desc: "Advanced software analysis to optimize casting design, metal flow, and solidification process.",
  },
  {
    title: "Tool Making",
    img: "/ToolMaking.png",
    desc: "Precision die and mold fabrication for accurate wax pattern reproduction.",
  },
  {
    title: "Wax Injection",
    img: "/Wax.jpg",
    desc: "High-pressure injection of molten wax into dies to create precise casting patterns.",
  },
  {
    title: "Assembly",
    img: "/Assembly.jpg",
    desc: "Strategic arrangement of wax patterns onto gating systems for efficient casting production.",
  },
  {
    title: "Ceramic Coating",
    img: "/Ceramic.jpg",
    desc: "Multiple layers of ceramic slurry applied to build strong, heat-resistant mold shells.",
  },
  {
    title: "Rainfall Sander",
    img: "/rainfall.jpg",
    desc: "Automated stucco application system for uniform ceramic shell reinforcement.",
  },
  {
    title: "Dewaxing",
    img: "/Dewaxing.jpg",
    desc: "High-temperature process to melt and remove wax patterns from ceramic shells.",
  },
  {
    title: "Pouring",
    img: "/pouring.jpg",
    desc: "Controlled transfer of molten metal into preheated ceramic molds at precise temperatures.",
  },
  {
    title: "Knock Out",
    img: "/knock-out.jpg",
    desc: "Mechanical removal of ceramic shell material to reveal solidified metal castings.",
  },
  {
    title: "Cutting",
    img: "/cutting.jpg",
    desc: "Precision separation of individual castings from gating systems and runners.",
  },
  {
    title: "Shot Blasting",
    img: "/shot.jpg",
    desc: "High-velocity abrasive cleaning to remove residual shell material and achieve uniform surface finish.",
  },
  {
    title: "Fettling",
    img: "/knock-out.jpg",
    desc: "Manual and mechanical finishing operations to remove excess material and refine surfaces.",
  },
  {
    title: "Knock Out",
    img: "/kouckOut.png",
    desc: "Mechanical removal of ceramic shell material to reveal solidified metal castings",
  },
  {
    title: "Heat Treatment",
    img: "/cutting.jpg",
    desc: "Controlled heating and cooling to achieve desired properties and stress relief.",
  },
  {
    title: "Laboratory",
    img: "/lab.png",
    desc: "Comprehensive testing facility for material analysis, dimensional verification, and quality assurance.",
  },
];

function ProcessPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-md overflow-hidden
                         transition-all duration-300 hover:-translate-y-2"
            >
              <img src={item.img} className="w-full h-48 object-cover" />

              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-3">{item.desc}</p>
              </div>

              <div className="h-1 bg-orange-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessPreview;
