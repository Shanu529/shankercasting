import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import api from "../../api/axios";

function Footer() {
  const [form, setForm] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) {
      setStatus("Email is required");
      setIsSuccess(false);
      return;
    }

    if (!emailRegex.test(form.email)) {
      setStatus("Please enter a valid email address");
      setIsSuccess(false);
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await api.post("/api/newsletter", form);

      setForm({ email: "" });
      setStatus("Thank you for subscribing!");
      setIsSuccess(true);
    } catch (error) {
      setStatus(error.response?.data?.error || "Failed to subscribe");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
        setIsSuccess(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              ABOUT US
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Shanker Casting Industries is a leading manufacturer of investment
              casting components. Our state-of-the-art manufacturing processes
              produce castings ranging from a few grams to 70 kg.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Opening Hours
            </h3>
            <p className="text-gray-300 text-sm">09:00 AM To 6:00 PM</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Recent Posts
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Investment Casting for Diverse Industries
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Quality Assurance in Investment Casting
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Understanding the Investment Casting Process
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
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
      </div>

      {/* bottom section of footer */}
      <div className="bg-[#0b0b0b] text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start gap-4 mb-6">
                <Link
                  to="#"
                  className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] hover:bg-orange-500 transition-all duration-300 rounded-md hover:scale-110"
                >
                  <FaFacebookF className="text-white text-base" />
                </Link>

                <Link
                  to="#"
                  className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] hover:bg-orange-500 transition-all duration-300 rounded-md hover:scale-110"
                >
                  <FaXTwitter className="text-white text-base" />
                </Link>

                <Link
                  to="#"
                  className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] hover:bg-orange-500 transition-all duration-300 rounded-md hover:scale-110"
                >
                  <FaInstagram className="text-white text-base" />
                </Link>

                <Link
                  to="#"
                  className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] hover:bg-orange-500 transition-all duration-300 rounded-md hover:scale-110"
                >
                  <FaLinkedinIn className="text-white text-base" />
                </Link>
              </div>

              <p className="text-gray-400 text-sm">
                Terms & Conditions · Policies · Legal Notice
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">
                Subscribe to our Newsletter
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                Get updates about our latest products and industry insights.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3"
              >
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full sm:flex-1 bg-[#1a1a1a] text-white px-5 py-3 rounded-md focus:outline-none focus:ring-2 transition-all ${
                    status.includes("valid") || status.includes("required")
                      ? "ring-red-500"
                      : "focus:ring-orange-500"
                  }`}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 disabled:opacity-60"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {status && (
                <p
                  className={`mt-4 text-sm font-medium transition-all duration-300 ${
                    isSuccess ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>

            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                Shanker Casting <br /> Industries
              </h3>

              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Shanker Casting Industries.
                <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
