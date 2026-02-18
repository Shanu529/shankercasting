import React, { useState } from "react";
import api from "../../api/axios";

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
    <section className="bg-gray-50 py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Get In <span className="text-orange-500">Touch</span>
          </h2>

          <div className="flex justify-center mt-4">
            <div className="w-12 sm:w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>

          <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions or need assistance? Our team is ready to help you
            with inquiries, project discussions, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <div className="space-y-8 text-gray-800 text-sm sm:text-base">
            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p>info@shankercasting.com</p>
              <p>support@shankercasting.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p>+91 941752013</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Office Address</h3>
              <p className="leading-relaxed">
                Pawa Road, Ludhiana, Punjab – 141017 India
              </p>
            </div>

            <div className="text-gray-600 leading-relaxed">
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Your Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Your Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300 text-sm sm:text-base"
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

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
