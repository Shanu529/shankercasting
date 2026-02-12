// import { useParams } from "react-router-dom";
// import industries from "../data/industriesData";

// function IndustryBlog() {
//   const { slug } = useParams();

//   const industry = industries.find((item) => item.slug === slug);

//   if (!industry) return <div className="text-center py-20">Not Found</div>;

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-5xl mx-auto px-6">
//         <img
//           src={industry.image}
//           alt={industry.title}
//           className="w-full h-[400px] object-cover rounded-xl mb-10"
//         />

//         <h1 className="text-4xl font-bold mb-6">{industry.title}</h1>

//         <p className="text-gray-700 leading-relaxed text-lg">
//           {industry.content}
//         </p>
//       </div>
//     </section>
//   );
// }

// export default IndustryBlog;

import { useParams } from "react-router-dom";
import industries from "../data/industriesData";

function IndustryBlog() {
  const { slug } = useParams();

  const industry = industries.find((item) => item.slug === slug);

  if (!industry) return <div className="text-center py-20">Not Found</div>;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="overflow-hidden rounded-xl mb-8 sm:mb-12">
          <img
            src={industry.image}
            alt={industry.title}
            className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          {industry.title}
        </h1>

        {/* Excerpt */}
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
          {industry.excerpt}
        </p>

        {/* Blog Content */}
        <div className="space-y-6 sm:space-y-8">
          {industry.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-xl sm:text-2xl font-semibold mt-8"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="text-gray-700 text-sm sm:text-base leading-relaxed"
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className="list-disc pl-5 sm:pl-6 text-gray-700 text-sm sm:text-base space-y-2"
                >
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustryBlog;
