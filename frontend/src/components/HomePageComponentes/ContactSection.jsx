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
