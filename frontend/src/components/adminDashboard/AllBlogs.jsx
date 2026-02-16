import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { Link } from "react-router-dom";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [deleteId, setDeleteId] = useState(null);

 
  const fetchBlogs = async () => {
    try {
      const res = await api.get("/api/blog");
      setBlogs(res.data.blogs);
    } catch (error) {
       console.log("FULL ERROR:", error);
  console.log("SERVER RESPONSE:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Confirm delete
  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.delete(`/api/blog/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBlogs((prev) => prev.filter((blog) => blog.id !== deleteId));
      setMessage("Blog deleted successfully");
      setDeleteId(null);
    } catch (error) {
        console.log("FULL ERROR:", error);
  console.log("SERVER RESPONSE:", error.response?.data);
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">All Blogs</h2>
        <p className="text-gray-500 text-sm mt-1">
          Manage, edit or delete your published blog posts.
        </p>
      </div>

      {message && (
        <div className="text-sm font-medium text-gray-700">{message}</div>
      )}

      <div className="bg-white rounded-xl shadow overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No blogs found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Slug</th>
                  <th className="px-6 py-4">Created</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium">
  <Link
    to={`/blog/${blog.slug}`}
    target="_blank"
    className="text-gray-800 hover:text-blue-600 hover:underline transition"
  >
    {blog.title}
  </Link>
</td>

                    <td className="px-6 py-4 text-gray-500">
                        <Link
    to={`/blog/${blog.slug}`}
    target="_blank"
    className="text-gray-800 hover:text-blue-600 hover:underline transition"
  >
   {blog.slug}
  </Link>
                    </td>
                    
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-center space-x-3">
                      <Link
  to={`/admin/edit/${blog.id}`}
  className="text-blue-600 hover:underline"
>
  Edit
</Link>

                      <button
                        onClick={() => setDeleteId(blog.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setDeleteId(null)}
          ></div>

         
          <div className="relative bg-white rounded-xl shadow-2xl w-96 p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Confirm Deletion
            </h3>

            <p className="text-sm text-gray-600">
              Are you sure you want to delete this blog?
            </p>

            <div className="flex justify-end gap-3 pt-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded border border-gray-300 text-sm hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-600 text-white text-sm hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllBlogs;
