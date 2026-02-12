import React, { useState, useEffect } from "react";
import contactImg from "../../assets/images/contact-banner.png";
import api from "../../api/axios";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    console.log("API:", import.meta.env.VITE_BACKEND_URL);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await api.post("/api/contact", form);

      setStatus("Message sent successfully ");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact error:", error);
      setStatus("Failed to send message ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="text-center mb-12 sm:mb-14 lg:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight leading-tight">
          Get In <span className="text-orange-500">Touch</span>
        </h2>

        <div className="flex justify-center mt-4">
          <div className="w-12 sm:w-16 h-1 bg-orange-500 rounded-full"></div>
        </div>

        <p className="mt-5 sm:mt-6 text-gray-500 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Have questions or need assistance? Our team is ready to help you with
          inquiries, project discussions, and support.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex items-center overflow-hidden rounded-md">
            <img
              src={contactImg}
              alt="Contact"
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-md shadow-lg p-8 lg:p-12"
          >
            <div className="mb-6">
              <label className="block mb-2">Your name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 px-4 py-3 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Your email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 px-4 py-3 rounded-md"
              />
            </div>

            <div className="mb-8">
              <label className="block mb-2">Your message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-3 rounded-md"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 text-white px-8 py-3 rounded-full"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status && <p className="mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
