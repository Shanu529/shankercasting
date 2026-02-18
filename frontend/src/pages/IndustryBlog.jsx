import { useParams, Link } from "react-router-dom";
import api from "../api/axios";
import { useEffect, useState } from "react";

function IndustryBlog() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/api/blog/${slug}`);
        setBlog(res.data.singleBlog);
      } catch (err) {
        setError("Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-lg tracking-wide">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <p className="mb-6">{error}</p>
        <Link to="/" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
          Back to Blogs
        </Link>
      </div>
    );

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Blog Not Found
      </div>
    );

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="bg-white min-h-screen text-gray-900">

      {blog.image && (
        <div className="relative h-[500px] w-full overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-6">
            <div className="text-center max-w-5xl">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                {blog.title}
              </h1>
              <p className="text-gray-300 mt-6 text-sm uppercase tracking-widest">
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-20">

        <Link
          to="/"
          className="text-sm uppercase tracking-widest text-gray-500 hover:text-black transition"
        >
          ← Back to home
        </Link>

        <article className="mt-12 text-lg leading-9 font-light whitespace-pre-line">
          {blog.content}
        </article>

        <div className="mt-20 pt-8 border-t text-sm text-gray-400 tracking-wide">
          Published on {formattedDate}
        </div>
      </div>
    </section>
  );
}

export default IndustryBlog;
