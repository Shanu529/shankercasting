import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/img3.avif";
import img4 from "../../assets/images/img4.avif";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.webp";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.webp";

import img10 from "../../assets/images/pipefiltring.jpg";
import img11 from "../../assets/images/ped.jpg";
import img12 from "../../assets/images/tools-tackles.jpg";
import { useNavigate } from "react-router-dom";

import industries from "../../data/industriesData.js";
import { useState } from "react";
import api from "../../api/axios.js";
import { useEffect } from "react";


// const industries = [
//   // all these to create blog pages
//   { title: "Industrial Valves", image: img1 },
//   { title: "Automotive", image: img2 },
//   { title: "Agriculture", image: img3 },
//   { title: "Impeller Pumps", image: img4 },
//   { title: "Power plant", image: img5 },
//   { title: "Defence", image: img6 },
//   { title: "Infrastructure", image: img7 },
//   { title: "Medical", image: img8 },
//   { title: "Marine", image: img9 },

//   { title: "Pipe fittings", image: img10 },
//   { title: "PED – Valves", image: img11 },
//   { title: "Tool and Tackles", image: img12 },
// ];

function IndustriesSection() {


const [loading, setLoading] = useState(true);
const [blogs, setBlogs] = useState([]);

  
const fatchBlogs = async ()=>{
  try {
    const res = await api.get("/api/blog");
    setBlogs(res.data.blogs);
  } catch (error) {
    console.log("server error", error);
  } finally{
    setLoading(false)
  }
}

  useEffect(() => {
    fatchBlogs();
  }, []);

  const navigate = useNavigate();
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-orange-500 text-center text-sm md:text-lg font-semibold tracking-widest uppercase">
          ISO-Compliant Manufacturing Process
        </p>

        <h2
          className="text-white text-center font-extrabold mt-6
                   text-2xl sm:text-4xl lg:text-5xl tracking-wide"
        >
          INDUSTRIES WE SERVE BUILD BY US
        </h2>

        {/* cardss */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((item, index) => (
            <div
             onClick={() => navigate(`/blog/${item.slug}`)}

              key={index}
              className="group relative rounded-2xl overflow-hidden
                     border border-gray-800
                     transition-all duration-500
                     hover:-translate-y-4
                     hover:border-orange-500
                     hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover
                       transition-transform duration-700
                       group-hover:scale-110"
              />

              <div
                className="absolute inset-0 bg-black/40
                          group-hover:bg-black/60
                          transition-all duration-500"
              />

              <div
                className="absolute bottom-0 left-0 w-full h-32
                          bg-gradient-to-t from-black to-transparent"
              />

              <h3
                className="absolute bottom-8 left-1/2 -translate-x-1/2
                       text-white text-xl md:text-2xl font-semibold
                       tracking-wide transition duration-300
                       group-hover:text-orange-500"
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
