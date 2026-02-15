import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import ContactUs from "../src/pages/ContactUs";
import Footer from "./components/layout/Footer";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Navbar from "./components/layout/Navbar";
import IndustryBlog from "./pages/IndustryBlog";
import ScrollToTop from "./components/ScrollToTop";

import AdminRoute from "./components/adminDashboard/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";

import DashboardOverview from "./components/adminDashboard/DashboardOverview";
import CreateBlog from "./components/adminDashboard/CreateBlog";
import AllBlogs from "./components/adminDashboard/AllBlogs";
import Contacts from "./components/adminDashboard/Contacts";
import NewsLetter from "./components/adminDashboard/NewsLetter";


function App() {
  const location = useLocation();
  console.log(location);

  const isAdmin = location.pathname.startsWith("/admin");
  console.log(isAdmin);

  return (
    <>
      {!isAdmin && <Navbar />}

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/blog/:slug" element={<IndustryBlog />} />
        {/* <Route path="/blog/:id" element={<IndustryBlog />} /> */}

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        >
          <Route index element={<DashboardOverview />} />{" "}
          <Route path="dashboard" element={<DashboardOverview />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="blogs" element={<AllBlogs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="newsletter" element={<NewsLetter />} />
        </Route>
      </Routes>

      {/* Hide Footer if admin route */}
      {!isAdmin && <Footer />}
    </>
  );
}

export default App;
