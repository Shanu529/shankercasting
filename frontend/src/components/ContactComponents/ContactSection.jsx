import React, { useState } from "react";
import api from "../../api/axios";
// import img from "/public/aboutImages/facility.png"

import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
// import { MdSupportAgent } from "react-icons/md";
function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await api.post("/api/contact", form);
      setStatus("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 w-full">

          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Chat with our
            </h2>

            <div className="w-12 h-1 bg-orange-500 mt-2 rounded"></div>

            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Have questions about our investment casting services or need help
              with a project? Send us a message and our team will respond as
              soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

           <div>
              <div className="flex items-center gap-2 mb-2">
                <FaUser className="text-orange-500 text-sm" />
                <label className="text-sm font-medium text-gray-700">
                  Your Name
                </label>
              </div>

              <input
                placeholder="Enter your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaEnvelope className="text-orange-500 text-sm" />
                <label className="text-sm font-medium text-gray-700">
                  Your Email
                </label>
              </div>

              <input
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaCommentDots className="text-orange-500 text-sm" />
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
              </div>

              <textarea
                placeholder="Write your message..."
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              {loading ? "Sending..." : "Submit Message"}
            </button>

            {status && (
              <p
                className={`text-sm mt-3 ${
                  status.includes("success")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}

          </form>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl group h-[320px] sm:h-[400px] md:h-[450px] lg:h-auto">

          <img
            src="/aboutImages/facility.png"
            alt="Manufacturing Facility"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          
          <div className="absolute bottom-0 p-6 sm:p-8 text-white">

            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-md">
              Shanker Casting Industries provides high-quality investment
              casting components with precision engineering and reliable
              manufacturing processes for diverse industrial applications.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-gray-200">
              Trusted Manufacturing Partner
            </p>

          </div>

        </div>

      </div>
    </div>
  </section>
)
}

export default ContactSection;
