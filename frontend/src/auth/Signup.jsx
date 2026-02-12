import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validate = () => {
    if (!form.name || !form.email || !form.password) {
      return "All fields are required";
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Invalid email format";
    }

    if (form.password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      return setError(validationError);
    }

    try {
      setLoading(true);

      const res = await api.post("/api/auth/signup", form);

      login(res.data.token, res.data.user);

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:py-15 py-12 flex items-center justify-center bg-black px-4">
      <div
        className="w-full max-w-md bg-black/70 backdrop-blur-md
                   border border-white/10 rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h2>

        <p className="text-gray-400 text-sm text-center mb-6">
          Join Shankar Casting Portal
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
         
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-1 w-full rounded-lg bg-black border border-white/20
                         px-4 py-3 text-white focus:border-orange-500
                         focus:outline-none"
            />
          </div>

        
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg bg-black border border-white/20
                         px-4 py-3 text-white focus:border-orange-500
                         focus:outline-none"
            />
          </div>

     
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="mt-1 w-full rounded-lg bg-black border border-white/20
                         px-4 py-3 text-white focus:border-orange-500
                         focus:outline-none"
            />
          </div>

        
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

         
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-orange-500 py-3
                       font-semibold text-white hover:bg-orange-600 transition
                       disabled:opacity-50"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-orange-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
