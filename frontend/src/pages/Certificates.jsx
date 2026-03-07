import React from "react";

function Certification() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-orange-500">Certification</span>
          </h2>

          <div className="flex justify-center mt-4">
            <div className="w-12 sm:w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Shanker Casting Industries follows internationally recognized
            quality standards. Our ISO certification reflects our commitment
            to maintaining high manufacturing quality and continuous
            improvement.
          </p>
        </div>

        
        <div className="flex justify-center">
          <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 max-w-xs sm:max-w-md md:max-w-lg w-full text-center hover:shadow-2xl transition duration-300">

            <img
              src="/certificates/iso9001.png"
              alt="ISO 9001 Certificate"
              className="rounded-lg mb-5 sm:mb-6 w-full object-contain"
            />

            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              ISO 9001:2015 Certification
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Certified for Quality Management System in the manufacturing of
              investment casting components.
            </p>

            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

              <a
                href="/certificates/iso9001.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                View Certificate
              </a>

              <a
                href="/certificates/iso9001.pdf"
                download
                className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-50 transition"
              >
                Download
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Certification;