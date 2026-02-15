import React, { useState } from "react";
import api from "../../api/axios";

function CreateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Auto generate slug
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  // Handle image select
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setImageFile(null);
    setPreview(null);
  };

   const token = localStorage.getItem("token");
   console.log("here is token",token);
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");


    try {
      const token = localStorage.getItem("token");

      const data = new FormData();
      data.append("title", formData.title);
      data.append("slug", formData.slug || generateSlug(formData.title));
      data.append("content", formData.content);
      data.append("metaTitle", formData.metaTitle);
      data.append("metaDescription", formData.metaDescription);

      if (imageFile) {
        data.append("image", imageFile);
      }

      await api.post("/api/blog", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("success");

      // Reset form
      setFormData({
        title: "",
        slug: "",
        content: "",
        metaTitle: "",
        metaDescription: "",
      });

      setImageFile(null);
      setPreview(null);

    } catch (error) {
      console.log("ERROR:", error.response?.data);
      setMessage("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Create New Blog</h2>
        <p className="text-gray-500 text-sm mt-1">
          Fill the details below to publish a new blog post.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow space-y-6"
      >
        {message === "success" && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm text-center">
            ✅ Blog published successfully!
          </div>
        )}

        {message === "error" && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm text-center">
            ❌ Failed to publish blog
          </div>
        )}

        {/* Blog Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Slug (optional)
          </label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Blog Image
          </label>

          <div
            className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-gray-900 transition"
            onClick={() => document.getElementById("imageInput").click()}
          >
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            {!preview ? (
              <div className="space-y-2">
                <div className="text-4xl">📷</div>
                <p className="text-gray-600 text-sm">
                  Click to upload blog image
                </p>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-60 object-cover rounded-lg"
                />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage();
                  }}
                  className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blog Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="8"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
          />
        </div>

        {/* Meta Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Title
          </label>
          <input
            type="text"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
          />
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Description
          </label>
          <textarea
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg w-full disabled:opacity-60"
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
