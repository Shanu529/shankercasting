import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import ContactUs from "../src/pages/ContactUs";
import Footer from "./components/layout/Footer";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Navbar from "./components/layout/Navbar";
import IndustryBlog from "./pages/IndustryBlog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/blog/:slug" element={<IndustryBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
