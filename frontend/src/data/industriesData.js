import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/img3.avif";
import img4 from "../assets/images/img4.avif";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.webp";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.webp";
import img10 from "../assets/images/pipefiltring.jpg";
import img11 from "../assets/images/ped.jpg";
import img12 from "../assets/images/tools-tackles.jpg";

// const industries = [
//     {
//         title: "Industrial Valves",
//         slug: "industrial-valves",
//         image: img1,
//         excerpt:
//             "Reliable and high-performance valve solutions for industrial flow control systems.",
//         content:
//             "Industrial valves are critical components in managing pressure, temperature, and flow across oil & gas, chemical processing, and power generation industries. Designed with precision engineering and durable materials, our valve systems ensure operational safety, leak-proof performance, and long service life even under extreme industrial conditions."
//     },
//     {
//         title: "Automotive",
//         slug: "automotive",
//         image: img2,
//         excerpt:
//             "Precision-engineered components supporting modern automotive manufacturing.",
//         content:
//             "The automotive sector demands high-accuracy components that ensure reliability and performance. Our manufacturing capabilities support engine systems, transmission parts, and structural components that meet global automotive standards. With advanced machining and quality control, we deliver durable solutions for evolving mobility technologies."
//     },
//     {
//         title: "Agriculture",
//         slug: "agriculture",
//         image: img3,
//         excerpt:
//             "Advanced engineering solutions for modern agricultural systems.",
//         content:
//             "Agricultural operations rely on efficient irrigation systems, pumps, and mechanical equipment. Our solutions support large-scale farming operations by delivering robust components that withstand outdoor environments, heavy usage, and varying climatic conditions."
//     },
//     {
//         title: "Impeller Pumps",
//         slug: "impeller-pumps",
//         image: img4,
//         excerpt:
//             "High-efficiency impeller pump systems for fluid transfer applications.",
//         content:
//             "Impeller pumps are widely used in water treatment, chemical processing, and industrial cooling systems. Built with corrosion-resistant materials and precision-balanced impellers, our pump systems ensure consistent flow performance, reduced vibration, and long operational life."
//     },
//     {
//         title: "Power Plant",
//         slug: "power-plant",
//         image: img5,
//         excerpt:
//             "Heavy-duty industrial components designed for power generation facilities.",
//         content:
//             "Power plants require durable and high-performance components capable of handling high-pressure and high-temperature environments. Our products support thermal, hydro, and renewable power stations with reliable industrial-grade engineering solutions."
//     },
//     {
//         title: "Defence",
//         slug: "defence",
//         image: img6,
//         excerpt:
//             "Precision-manufactured components for defence and government applications.",
//         content:
//             "The defence sector demands strict quality standards and engineering excellence. Our advanced manufacturing processes ensure precision, durability, and reliability in mission-critical applications, meeting compliance and safety requirements."
//     },
//     {
//         title: "Infrastructure",
//         slug: "infrastructure",
//         image: img7,
//         excerpt:
//             "Engineering support for large-scale infrastructure development projects.",
//         content:
//             "Infrastructure development requires strong, reliable mechanical components for bridges, highways, and urban development projects. Our products contribute to long-lasting and structurally sound engineering solutions."
//     },
//     {
//         title: "Medical",
//         slug: "medical",
//         image: img8,
//         excerpt:
//             "Precision components for advanced medical and healthcare systems.",
//         content:
//             "Medical equipment manufacturing demands extreme precision and hygiene standards. Our production systems ensure accuracy, material integrity, and consistent quality required for medical-grade applications."
//     },
//     {
//         title: "Marine",
//         slug: "marine",
//         image: img9,
//         excerpt:
//             "Corrosion-resistant components for marine and offshore environments.",
//         content:
//             "Marine applications operate in highly corrosive environments. Our marine-grade components are built with specialized materials to withstand saltwater exposure, heavy loads, and extreme operational conditions."
//     },
//     {
//         title: "Pipe Fittings",
//         slug: "pipe-fittings",
//         image: img10,
//         excerpt:
//             "Durable pipe fitting solutions for industrial piping systems.",
//         content:
//             "Pipe fittings are essential for connecting, controlling, and directing fluid flow in industrial systems. Manufactured with high-grade materials, our fittings ensure leak-proof performance and structural reliability."
//     },
//     {
//         title: "PED – Valves",
//         slug: "ped-valves",
//         image: img11,
//         excerpt:
//             "Pressure Equipment Directive (PED) compliant valve systems.",
//         content:
//             "Our PED-certified valves meet strict European safety and compliance standards. Designed for high-pressure environments, these valves undergo rigorous quality testing to ensure safety, durability, and performance."
//     },
//     {
//         title: "Tool and Tackles",
//         slug: "tool-and-tackles",
//         image: img12,
//         excerpt:
//             "Heavy-duty industrial tools and lifting tackles for engineering operations.",
//         content:
//             "Industrial tools and tackles are vital for lifting, rigging, and mechanical operations. Built for strength and safety, our equipment ensures efficient workflow and operational security in manufacturing environments."
//     }
// ];

const industries = [
    {
        title: "Industrial Valves",
        slug: "industrial-valves",
        image: img1,
        excerpt:
            "Industrial valves are essential flow-control devices used to regulate, direct, and control liquids, gases, and steam in industrial systems.",

        content: [
            {
                type: "paragraph",
                text:
                    "Industrial valves are mechanical devices designed to control the flow and pressure of fluids within pipelines and process systems. They are widely used in oil & gas, power generation, chemical processing, water treatment, marine, and manufacturing industries. Proper valve selection ensures system safety, efficiency, and long operational life."
            },
            {
                type: "heading",
                text: "Common Types of Industrial Valves"
            },
            {
                type: "list",
                items: [
                    "Gate Valves – Used primarily for full open or full close applications. They provide minimal pressure drop when fully open.",
                    "Globe Valves – Suitable for throttling and regulating flow due to their precise control mechanism.",
                    "Ball Valves – Provide quick shut-off using a rotating ball with a bore. Known for durability and tight sealing.",
                    "Butterfly Valves – Lightweight and compact valves ideal for large-diameter pipelines.",
                    "Check Valves – Automatically prevent reverse flow in piping systems.",
                    "Control Valves – Equipped with actuators to automatically regulate pressure and flow."
                ]
            },
            {
                type: "heading",
                text: "Key Components"
            },
            {
                type: "paragraph",
                text:
                    "Industrial valves typically consist of a body, bonnet, stem, disc or ball, seat, and actuator (manual or automated). Materials used include stainless steel, carbon steel, brass, bronze, and special alloys depending on operating pressure, temperature, and corrosion resistance requirements."
            },
            {
                type: "heading",
                text: "Applications Across Industries"
            },
            {
                type: "list",
                items: [
                    "Oil & Gas pipelines for crude oil and natural gas flow control.",
                    "Power plants for steam and cooling water regulation.",
                    "Chemical plants handling corrosive and hazardous fluids.",
                    "Water and wastewater treatment facilities.",
                    "Marine systems and offshore installations."
                ]
            },
            {
                type: "heading",
                text: "Standards & Compliance"
            },
            {
                type: "paragraph",
                text:
                    "Industrial valves are manufactured according to international standards such as API, ANSI, ASME, ISO, and PED (Pressure Equipment Directive). Testing procedures include hydrostatic testing, pressure testing, leakage testing, and material certification to ensure safety and reliability."
            },
            {
                type: "heading",
                text: "Why Quality Matters"
            },
            {
                type: "paragraph",
                text:
                    "A high-quality industrial valve reduces downtime, prevents leakage, enhances operational efficiency, and ensures workplace safety. Proper engineering, precision machining, and rigorous quality control are essential for valves operating under high-pressure and high-temperature conditions."
            }
        ]
    },
    {
        title: "Automotive",
        slug: "automotive",
        image: img2,
        excerpt:
            "Precision-manufactured casting and machined components for modern automotive systems.",

        content: [
            {
                type: "paragraph",
                text:
                    "The automotive industry relies heavily on precision-engineered metal components to ensure vehicle safety, durability, and performance. From engine assemblies to braking systems, high-quality castings and machined parts form the backbone of modern automotive manufacturing."
            },
            {
                type: "heading",
                text: "Automotive Components We Support"
            },
            {
                type: "list",
                items: [
                    "Engine components such as housings and brackets",
                    "Transmission and gearbox castings",
                    "Suspension system parts",
                    "Brake system components",
                    "Exhaust and manifold castings"
                ]
            },
            {
                type: "heading",
                text: "Manufacturing Process"
            },
            {
                type: "paragraph",
                text:
                    "Automotive components are produced using advanced casting techniques such as investment casting and precision machining. These processes ensure dimensional accuracy, strength, and resistance to wear under high mechanical stress."
            },
            {
                type: "heading",
                text: "Material Selection"
            },
            {
                type: "paragraph",
                text:
                    "Common materials used in automotive castings include carbon steel, alloy steel, stainless steel, and specialized heat-resistant alloys. Proper material selection is critical to withstand high temperatures, vibration, and continuous load conditions."
            },
            {
                type: "heading",
                text: "Quality & Industry Standards"
            },
            {
                type: "paragraph",
                text:
                    "Automotive components must comply with strict quality standards such as ISO certifications and automotive-specific manufacturing protocols. Rigorous inspection processes, including dimensional testing and mechanical property validation, ensure reliability and safety."
            },
            {
                type: "heading",
                text: "Why Precision Matters in Automotive"
            },
            {
                type: "paragraph",
                text:
                    "Even minor dimensional deviations can affect vehicle performance and safety. Precision casting and machining reduce failure risks, improve efficiency, and support long-term durability in demanding automotive environments."
            }
        ]
    },
    {
        title: "Agriculture",
        slug: "agriculture",
        image: img3,
        excerpt:
            "Durable cast and machined components supporting modern agricultural machinery and irrigation systems.",

        content: [
            {
                type: "paragraph",
                text:
                    "The agriculture industry depends on robust mechanical systems to ensure efficient cultivation, irrigation, and harvesting operations. High-strength cast components play a vital role in tractors, irrigation pumps, tillage equipment, and other agricultural machinery operating under harsh environmental conditions."
            },
            {
                type: "heading",
                text: "Applications in Agricultural Equipment"
            },
            {
                type: "list",
                items: [
                    "Tractor and transmission components",
                    "Irrigation pump housings and fittings",
                    "Plough and tillage system parts",
                    "Harvesting machine structural components",
                    "Valve and flow-control parts for irrigation networks"
                ]
            },
            {
                type: "heading",
                text: "Operating Conditions"
            },
            {
                type: "paragraph",
                text:
                    "Agricultural machinery operates in challenging environments including dust, moisture, mud, and fluctuating temperatures. Components must be corrosion-resistant, wear-resistant, and capable of withstanding continuous mechanical stress."
            },
            {
                type: "heading",
                text: "Material Selection & Durability"
            },
            {
                type: "paragraph",
                text:
                    "Materials such as carbon steel, alloy steel, and ductile iron are commonly used in agricultural castings due to their strength and impact resistance. Proper surface treatment and finishing processes enhance durability and extend service life."
            },
            {
                type: "heading",
                text: "Precision & Quality Assurance"
            },
            {
                type: "paragraph",
                text:
                    "Dimensional accuracy is essential to ensure compatibility with agricultural machinery assemblies. Strict quality inspection, mechanical testing, and compliance with international manufacturing standards guarantee reliable performance in demanding field operations."
            },
            {
                type: "heading",
                text: "Supporting Sustainable Agriculture"
            },
            {
                type: "paragraph",
                text:
                    "By delivering high-quality engineering components, manufacturers contribute to efficient irrigation systems, reduced equipment downtime, and improved productivity in modern agricultural practices."
            }
        ]
    },

    {
        title: "Impeller Pumps",
        slug: "impeller-pumps",
        image: img4,
        excerpt:
            "Centrifugal impeller pumps designed for efficient fluid transfer in industrial process systems.",

        content: [
            {
                type: "paragraph",
                text:
                    "Impeller pumps, commonly known as centrifugal pumps, are widely used in industrial applications for transferring liquids through pipelines. These pumps operate by converting rotational energy from an electric motor into kinetic energy using a rotating impeller, enabling consistent and controlled fluid movement."
            },
            {
                type: "heading",
                text: "Working Principle"
            },
            {
                type: "paragraph",
                text:
                    "The impeller rotates inside the pump casing, creating centrifugal force that pushes the liquid outward from the center of rotation. This increases the fluid velocity, which is then converted into pressure energy as it exits the pump. The result is a steady and efficient flow of liquid through the system."
            },
            {
                type: "heading",
                text: "Industrial Applications"
            },
            {
                type: "list",
                items: [
                    "Water supply and treatment plants",
                    "Chemical processing industries",
                    "Cooling systems in power plants",
                    "Oil & gas fluid handling",
                    "HVAC and industrial circulation systems"
                ]
            },
            {
                type: "heading",
                text: "Key Components"
            },
            {
                type: "list",
                items: [
                    "Impeller – Rotating component that moves fluid",
                    "Pump casing – Encloses and directs fluid flow",
                    "Shaft and bearings – Support rotation",
                    "Mechanical seals – Prevent leakage",
                    "Electric motor – Provides rotational power"
                ]
            },
            {
                type: "heading",
                text: "Material & Durability"
            },
            {
                type: "paragraph",
                text:
                    "Impellers and pump bodies are typically manufactured using stainless steel, cast iron, bronze, or specialized corrosion-resistant alloys depending on the operating environment. Proper material selection ensures resistance to abrasion, corrosion, and high-temperature fluids."
            },
            {
                type: "heading",
                text: "Maintenance & Performance"
            },
            {
                type: "paragraph",
                text:
                    "Routine inspection of bearings, seals, and impeller balance is essential to maintain efficiency and prevent downtime. Proper alignment, vibration monitoring, and periodic performance testing ensure long service life and safe industrial operation."
            }
        ]
    },
    {
        title: "Power Plant",
        slug: "power-plant",
        image: img5,
        excerpt:
            "High-performance cast and machined components engineered for power generation systems operating under extreme conditions.",

        content: [
            {
                type: "paragraph",
                text:
                    "Power plants operate under high pressure and high temperature environments, requiring robust and precision-engineered industrial components. Whether in thermal, hydro, or renewable power generation facilities, mechanical reliability is critical to ensure continuous energy production."
            },
            {
                type: "heading",
                text: "Applications in Power Generation"
            },
            {
                type: "list",
                items: [
                    "Steam and condensate piping systems",
                    "Boiler and turbine support components",
                    "Cooling water circulation systems",
                    "Pressure control and isolation valves",
                    "Pump housings and mechanical assemblies"
                ]
            },
            {
                type: "heading",
                text: "Operating Conditions"
            },
            {
                type: "paragraph",
                text:
                    "Power generation facilities involve extreme operating parameters including high-pressure steam lines, elevated temperatures, and continuous load cycles. Components must withstand thermal expansion, vibration, and mechanical stress without compromising structural integrity."
            },
            {
                type: "heading",
                text: "Materials & Engineering Standards"
            },
            {
                type: "paragraph",
                text:
                    "Components used in power plants are typically manufactured using alloy steels, stainless steels, and heat-resistant materials designed for high-temperature applications. Compliance with international standards such as ASME, ANSI, and ISO ensures safety and performance reliability."
            },
            {
                type: "heading",
                text: "Quality & Testing"
            },
            {
                type: "paragraph",
                text:
                    "Rigorous inspection processes including hydrostatic testing, pressure testing, material certification, and dimensional verification are essential in power plant components. Proper quality assurance minimizes downtime and enhances operational safety."
            },
            {
                type: "heading",
                text: "Supporting Sustainable Energy"
            },
            {
                type: "paragraph",
                text:
                    "Reliable industrial components contribute to efficient power generation and reduced maintenance requirements. By ensuring durability and compliance, engineering solutions support both conventional and renewable energy infrastructures."
            }
        ]
    },
    {
        title: "Defence",
        slug: "defence",
        image: img6,
        excerpt:
            "High-strength precision-engineered components supporting defence and government infrastructure systems.",

        content: [
            {
                type: "paragraph",
                text:
                    "The defence sector requires highly reliable and precision-manufactured industrial components designed to perform under extreme environmental and operational conditions. Mechanical integrity, dimensional accuracy, and strict quality control are critical in applications where safety and performance cannot be compromised."
            },
            {
                type: "heading",
                text: "Applications in Defence Infrastructure"
            },
            {
                type: "list",
                items: [
                    "Mechanical housings and structural components",
                    "High-pressure valve systems",
                    "Heavy-duty pump and fluid handling parts",
                    "Pipeline and support system components",
                    "Industrial-grade fastening and support assemblies"
                ]
            },
            {
                type: "heading",
                text: "Operating Conditions"
            },
            {
                type: "paragraph",
                text:
                    "Defence-related mechanical systems often operate in harsh environments including extreme temperatures, high vibration, corrosive conditions, and heavy load applications. Components must maintain structural integrity and performance over extended service cycles."
            },
            {
                type: "heading",
                text: "Material Selection"
            },
            {
                type: "paragraph",
                text:
                    "Materials such as high-strength alloy steel, stainless steel, and specialized corrosion-resistant alloys are commonly used in defence-grade industrial components. Proper heat treatment and surface finishing enhance durability and resistance to wear."
            },
            {
                type: "heading",
                text: "Compliance & Quality Standards"
            },
            {
                type: "paragraph",
                text:
                    "Manufacturing for defence applications requires strict adherence to international quality standards and inspection protocols. Dimensional verification, material traceability, mechanical testing, and non-destructive testing ensure reliability and compliance."
            },
            {
                type: "heading",
                text: "Precision & Reliability"
            },
            {
                type: "paragraph",
                text:
                    "Precision engineering minimizes operational risks and enhances system performance. Reliable industrial components contribute to stable and safe operation within defence infrastructure and government-supported facilities."
            }
        ]
    },
    {
        title: "Infrastructure",
        slug: "infrastructure",
        image: img7,
        excerpt:
            "High-strength cast and machined components supporting large-scale infrastructure and urban development projects.",

        content: [
            {
                type: "paragraph",
                text:
                    "Infrastructure development involves complex engineering systems that require durable and high-performance mechanical components. From urban water supply networks to industrial construction projects, reliable cast and machined parts play a crucial role in ensuring structural integrity and operational efficiency."
            },
            {
                type: "heading",
                text: "Applications in Infrastructure Projects"
            },
            {
                type: "list",
                items: [
                    "Water supply and drainage systems",
                    "Municipal pipeline networks",
                    "Structural support components",
                    "Industrial pumping and valve systems",
                    "Urban utility and transport infrastructure"
                ]
            },
            {
                type: "heading",
                text: "Operating Conditions"
            },
            {
                type: "paragraph",
                text:
                    "Infrastructure systems operate under varying environmental conditions including temperature fluctuations, moisture exposure, soil pressure, and continuous operational loads. Components must be corrosion-resistant and capable of long-term performance with minimal maintenance."
            },
            {
                type: "heading",
                text: "Material & Engineering Considerations"
            },
            {
                type: "paragraph",
                text:
                    "Materials such as ductile iron, carbon steel, stainless steel, and alloy steel are commonly used for infrastructure components. Proper casting, machining, and surface treatment processes enhance durability and structural strength."
            },
            {
                type: "heading",
                text: "Quality & Compliance"
            },
            {
                type: "paragraph",
                text:
                    "Infrastructure components must comply with national and international engineering standards to ensure safety and longevity. Rigorous inspection, dimensional verification, and mechanical testing are essential to maintain consistent quality."
            },
            {
                type: "heading",
                text: "Long-Term Reliability"
            },
            {
                type: "paragraph",
                text:
                    "High-quality engineering components contribute to sustainable infrastructure development by reducing downtime, improving efficiency, and extending service life in critical public utility systems."
            }
        ]
    },
    {
        title: "Medical",
        slug: "medical",
        image: img8,
        excerpt:
            "Precision-engineered metal components supporting medical and healthcare equipment systems.",

        content: [
            {
                type: "paragraph",
                text:
                    "The medical and healthcare sector requires high-precision metal components that meet strict hygiene and safety standards. Industrial casting and machining play an important role in producing durable and corrosion-resistant parts used in medical equipment and healthcare infrastructure."
            },
            {
                type: "heading",
                text: "Applications in Medical Equipment"
            },
            {
                type: "list",
                items: [
                    "Equipment housings and structural frames",
                    "Flow-control components for medical gas systems",
                    "Pump and valve components in hospital utilities",
                    "Support structures for diagnostic machinery",
                    "Precision machined brackets and fittings"
                ]
            },
            {
                type: "heading",
                text: "Material Requirements"
            },
            {
                type: "paragraph",
                text:
                    "Medical-related components are typically manufactured using stainless steel and corrosion-resistant alloys. These materials offer high strength, durability, and resistance to contamination, making them suitable for controlled healthcare environments."
            },
            {
                type: "heading",
                text: "Precision & Surface Finish"
            },
            {
                type: "paragraph",
                text:
                    "Dimensional accuracy and smooth surface finishing are essential in medical applications. Precision machining ensures proper fitment and functionality, while surface treatment processes enhance hygiene and long-term reliability."
            },
            {
                type: "heading",
                text: "Quality & Compliance"
            },
            {
                type: "paragraph",
                text:
                    "Manufacturing for medical applications requires strict quality control, material traceability, and inspection procedures. Compliance with international quality standards ensures safety, reliability, and consistent performance."
            },
            {
                type: "heading",
                text: "Reliability in Critical Environments"
            },
            {
                type: "paragraph",
                text:
                    "Reliable mechanical components support the safe operation of medical infrastructure, hospital utility systems, and specialized healthcare equipment, contributing to dependable and uninterrupted service."
            }
        ]
    },

    {
        title: "Marine",
        slug: "marine",
        image: img9,
        excerpt:
            "Corrosion-resistant cast and machined components engineered for marine and offshore environments.",

        content: [
            {
                type: "paragraph",
                text:
                    "Marine and offshore industries operate in some of the most demanding environmental conditions, including constant exposure to saltwater, humidity, and mechanical stress. Industrial components used in marine systems must be designed for corrosion resistance, structural strength, and long-term reliability."
            },
            {
                type: "heading",
                text: "Applications in Marine Systems"
            },
            {
                type: "list",
                items: [
                    "Shipboard piping and valve systems",
                    "Ballast and bilge pump components",
                    "Offshore platform fluid handling systems",
                    "Marine cooling and circulation systems",
                    "Structural and mechanical support components"
                ]
            },
            {
                type: "heading",
                text: "Corrosion Resistance & Material Selection"
            },
            {
                type: "paragraph",
                text:
                    "Materials such as marine-grade stainless steel, bronze alloys, duplex stainless steel, and corrosion-resistant cast iron are commonly used in marine applications. Proper alloy selection and protective coatings help prevent degradation caused by saltwater exposure."
            },
            {
                type: "heading",
                text: "Operating Conditions"
            },
            {
                type: "paragraph",
                text:
                    "Marine components must withstand vibration, continuous operation, fluctuating temperatures, and high mechanical loads. Engineering precision ensures structural integrity and safe operation even in offshore environments."
            },
            {
                type: "heading",
                text: "Standards & Quality Assurance"
            },
            {
                type: "paragraph",
                text:
                    "Marine-grade components are manufactured and tested in accordance with international marine and industrial standards. Rigorous inspection procedures, pressure testing, and material certification ensure durability and safety."
            },
            {
                type: "heading",
                text: "Long-Term Performance"
            },
            {
                type: "paragraph",
                text:
                    "High-quality marine components reduce maintenance requirements and extend operational lifespan, supporting efficient and reliable performance in maritime and offshore systems."
            }
        ]
    },
    {
        title: "Pipe Fittings",
        slug: "pipe-fittings",
        image: img10,
        excerpt:
            "Precision-manufactured pipe fittings designed for secure and leak-proof industrial piping systems.",

        content: [
            {
                type: "paragraph",
                text:
                    "Pipe fittings are essential components used to connect, redirect, reduce, or terminate sections of piping systems. They ensure secure fluid transfer in industries such as oil & gas, water treatment, chemical processing, power generation, and manufacturing."
            },
            {
                type: "heading",
                text: "Common Types of Pipe Fittings"
            },
            {
                type: "list",
                items: [
                    "Elbows – Used to change the direction of flow.",
                    "Tees and Cross Fittings – Allow branching of pipelines.",
                    "Couplings – Connect two pipes together.",
                    "Reducers – Reduce pipe diameter for flow control.",
                    "Nipples and Bushings – Threaded connectors for pipe joints.",
                    "Caps and Plugs – Used to close pipe ends."
                ]
            },
            {
                type: "heading",
                text: "Threaded and Welded Connections"
            },
            {
                type: "paragraph",
                text:
                    "Pipe fittings can be manufactured with threaded, socket-weld, or butt-weld connections depending on pressure requirements and system design. Threaded fittings are commonly used in low to medium pressure applications, while welded fittings provide stronger and permanent connections."
            },
            {
                type: "heading",
                text: "Material Selection"
            },
            {
                type: "paragraph",
                text:
                    "Pipe fittings are typically manufactured from stainless steel, carbon steel, brass, bronze, and alloy steels. Material choice depends on operating pressure, temperature, and resistance to corrosion or chemical exposure."
            },
            {
                type: "heading",
                text: "Standards & Quality Assurance"
            },
            {
                type: "paragraph",
                text:
                    "Industrial pipe fittings are produced according to international standards such as ASME, ANSI, and ISO. Dimensional inspection, pressure testing, and material certification ensure leak-proof performance and long-term reliability."
            },
            {
                type: "heading",
                text: "Industrial Applications"
            },
            {
                type: "list",
                items: [
                    "Oil & gas pipeline systems",
                    "Water and wastewater networks",
                    "Chemical processing plants",
                    "Steam and condensate lines",
                    "HVAC and industrial fluid systems"
                ]
            }
        ]
    },
    {
        title: "PED – Valves",
        slug: "ped-valves",
        image: img11,
        excerpt:
            "Industrial valves manufactured in compliance with the European Pressure Equipment Directive (PED 2014/68/EU).",

        content: [
            {
                type: "paragraph",
                text:
                    "The Pressure Equipment Directive (PED 2014/68/EU) is a European Union regulation that governs the design, manufacturing, and conformity assessment of pressure equipment. Valves used in pressurized systems within the EU must comply with PED requirements to ensure safety and reliability."
            },
            {
                type: "heading",
                text: "What is a PED-Compliant Valve?"
            },
            {
                type: "paragraph",
                text:
                    "A PED-compliant valve is manufactured, tested, and documented according to strict European safety standards. These valves are designed to operate safely under defined pressure limits and are suitable for use in pipelines, pressure vessels, and industrial systems within the European market."
            },
            {
                type: "heading",
                text: "Compliance Requirements"
            },
            {
                type: "list",
                items: [
                    "Material traceability and certification",
                    "Design verification and pressure rating validation",
                    "Hydrostatic and leakage testing",
                    "Conformity assessment procedures",
                    "CE marking and technical documentation"
                ]
            },
            {
                type: "heading",
                text: "Applications"
            },
            {
                type: "list",
                items: [
                    "Oil & gas pipeline systems",
                    "Chemical processing plants",
                    "Power generation facilities",
                    "Industrial pressure vessels",
                    "High-pressure fluid handling systems"
                ]
            },
            {
                type: "heading",
                text: "Why PED Compliance Matters"
            },
            {
                type: "paragraph",
                text:
                    "PED certification ensures that pressure equipment meets essential safety requirements. It reduces operational risk, ensures regulatory compliance within the European Union, and guarantees that valves can safely withstand specified pressure and temperature conditions."
            }
        ]
    },
    {
        title: "Tool and Tackles",
        slug: "tool-and-tackles",
        image: img12,
        excerpt:
            "Heavy-duty lifting tools and rigging tackles designed for safe material handling and industrial operations.",

        content: [
            {
                type: "paragraph",
                text:
                    "Tools and tackles are essential for lifting, rigging, positioning, and securing heavy loads in industrial environments. These components ensure safe and efficient material handling across manufacturing facilities, construction sites, warehouses, and engineering workshops."
            },
            {
                type: "heading",
                text: "Common Lifting & Rigging Equipment"
            },
            {
                type: "list",
                items: [
                    "Chain blocks and manual hoists",
                    "Hooks and swivel hooks",
                    "Shackles and lifting links",
                    "Wire ropes and lifting slings",
                    "Eye bolts and rigging hardware",
                    "Load binders and tensioning systems"
                ]
            },
            {
                type: "heading",
                text: "Material & Strength Requirements"
            },
            {
                type: "paragraph",
                text:
                    "Lifting tools and tackles are typically manufactured from high-strength alloy steel and treated through forging and heat treatment processes to enhance load-bearing capacity. Proper material selection ensures resistance to wear, deformation, and fatigue under heavy loads."
            },
            {
                type: "heading",
                text: "Safety & Load Ratings"
            },
            {
                type: "paragraph",
                text:
                    "Each lifting component is designed with a specified working load limit (WLL). Safety standards require regular inspection, proof testing, and certification to prevent operational hazards during lifting operations."
            },
            {
                type: "heading",
                text: "Industrial Applications"
            },
            {
                type: "list",
                items: [
                    "Manufacturing and assembly plants",
                    "Construction and infrastructure projects",
                    "Shipyards and marine operations",
                    "Maintenance and equipment installation",
                    "Material handling in warehouses"
                ]
            },
            {
                type: "heading",
                text: "Operational Reliability"
            },
            {
                type: "paragraph",
                text:
                    "Reliable lifting equipment improves workplace safety and operational efficiency. Properly engineered tools and tackles reduce downtime, prevent accidents, and ensure secure handling of heavy mechanical components."
            }
        ]
    }

]


export default industries;
