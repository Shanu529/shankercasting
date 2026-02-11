import React from "react";
import { useState, useEffect } from "react";
// import Navbar from "../components/layout/Navbar";
import ContactSection from "../components/ContactComponents/ContactSection";
function ContactUs() {
  const img = "../../public/contectImages/contactImg.png";

  return (
    <>
      <section className="relative h-[50vh] md:min-h-[60vh] w-full overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center `}
          style={{ backgroundImage: `url(${img})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0000]/90 via-[#0000]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          

          <div className="mt-24 max-w-2xl">
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Contact us
            </h1>
          </div>
        </div>
      </section>

      
      <ContactSection />

      

      <div className="mt-12 w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6851.386093083529!2d75.93825!3d30.839266000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391077007f08148b%3A0xad518f703ba3bb1d!2sShanker%20casting%20industries!5e0!3m2!1sen!2sin!4v1770727374706!5m2!1sen!2sin"
          
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}

export default ContactUs;
