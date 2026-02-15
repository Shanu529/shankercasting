import { useParams } from "react-router-dom";
import api from "../api/axios";
import { useEffect, useState } from "react";

function IndustryBlog() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/api/blog/${slug}`);
        setBlog(res.data.singleBlog);
      } catch (error) {
        console.log("Error fetching blog", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-gray-500">
        Loading blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-gray-500">
        Blog Not Found
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      
    
      {blog.image && (
        <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] w-full">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />

          
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
            <div className="text-center max-w-3xl">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {blog.title}
              </h1>

              <p className="text-gray-200 mt-4 text-sm sm:text-base">
                {new Date(blog.createdAt).toDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      
      <div className="max-w-3xl mx-auto px-6 py-16">

       
        <div className="w-20 h-1 bg-gray-900 mb-10"></div>

      
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>

       
        <div className="border-t border-gray-200 mt-16 pt-6 text-sm text-gray-500">
          Published on {new Date(blog.createdAt).toLocaleDateString()}
        </div>
      </div>
    </section>
  );
}

export default IndustryBlog;
