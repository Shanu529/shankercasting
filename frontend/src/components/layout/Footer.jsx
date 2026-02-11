import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h3 className="text-orange-500 font-semibold mb-6">
              ABOUT US
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Shanker Casting Industries is a leading manufacturer of
              investment casting components. Our state-of-the-art
              manufacturing processes produce castings ranging from a few
              grams to 70 kg.
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 font-semibold mb-6">
              Opening Hours
            </h3>
            <p className="text-gray-300 text-sm">
              09:00 AM To 6:00 PM
            </p>
          </div>

          
          <div>
            <h3 className="text-orange-500 font-semibold mb-6">
              Recent Posts
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Investment Casting for Diverse Industries
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Quality Assurance in Investment Casting
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Understanding the Investment Casting Process
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-500 font-semibold mb-6">
              Location
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pawa Road, Jaspal Bangar to <br />
              Pawa Village Kanganwal Road <br />
              Area Ludhiana, Punjab – <br />
              141017 India
            </p>
          </div>

        </div>

     
        <div className="border-t border-gray-800 mt-16 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shanker Casting Industries. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
