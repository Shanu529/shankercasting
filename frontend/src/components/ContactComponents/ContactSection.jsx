import React, { useState, useEffect } from "react";
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
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 text-gray-800">
            <div>
              <h3 className="font-semibold text-lg">Email address :-</h3>
              <p className="mt-2">info@shankercasting.com</p>
              <p>support@shankercasting.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Phone number :-</h3>
              <p className="mt-2">+91 941752013</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Office address :-</h3>
              <p className="mt-2 leading-relaxed">
                Pawa Road, Jaspal Bangar to Pawa Village Kanganwal Road Area,
                Ludhiana, Punjab – 141017 India
              </p>
            </div>

            <div className="leading-relaxed">
              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-medium mb-2">Your name</label>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  required
                  className="w-full bg-gray-100 rounded-md px-4 py-3
                             outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Your email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full bg-gray-100 rounded-md px-4 py-3
                             outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Your message (optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={handleChange}
                  name="message"
                  rows="4"
                  className="w-full bg-gray-100 rounded-md px-4 py-3
                             outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600
                           text-white font-semibold px-8 py-3
                           rounded-full transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
              {status && <p className="mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
