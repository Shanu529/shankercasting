import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [pageLoading, setPageLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // 🔥 Fetch Blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get("/api/blog");
        const blog = res.data.blogs.find(
          (b) => b.id === Number(id)
        );

        if (!blog) {
          setMessage("Blog not found");
          return;
        }

        setFormData({
          title: blog.title || "",
          slug: blog.slug || "",
          content: blog.content || "",
          metaTitle: blog.metaTitle || "",
          metaDescription: blog.metaDescription || "",
        });

        setPreview(blog.image || null);

      } catch (error) {
        console.log(error);
        setMessage("Failed to load blog");
      } finally {
        setPageLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // 🔥 Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Handle Image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // 🔥 Update Blog
  const handleUpdate = async (e) => {
    e.preventDefault();

    setUpdateLoading(true);
    setMessage("");
    setSuccess(false);

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();
      data.append("title", formData.title);
      data.append("slug", formData.slug);
      data.append("content", formData.content);
      data.append("metaTitle", formData.metaTitle);
      data.append("metaDescription", formData.metaDescription);

      if (image) {
        data.append("image", image);
      }

      await api.put(`/api/blog/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);
      setMessage("✅ Blog updated successfully!");

      // Redirect after 1.5s
      setTimeout(() => {
        navigate("/admin/blogs");
      }, 1500);

    } catch (error) {
      console.log(error);
      setSuccess(false);
      setMessage(
        error.response?.data?.error || "Update failed"
      );
    } finally {
      setUpdateLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Edit Blog
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Update your blog details below.
        </p>
      </div>

      {message && (
        <div
          className={`text-sm font-medium ${
            success ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </div>
      )}

      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-xl shadow space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block mb-2 font-medium">
            Blog Title
          </label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block mb-2 font-medium">
            Slug
          </label>
          <input
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-2 font-medium">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="8"
            required
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Meta Title */}
        <div>
          <label className="block mb-2 font-medium">
            Meta Title
          </label>
          <input
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Meta Description */}
        <div>
          <label className="block mb-2 font-medium">
            Meta Description
          </label>
          <textarea
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
            rows="3"
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-2 font-medium">
            Blog Image
          </label>

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full max-h-72 object-cover rounded mb-4"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={updateLoading}
          className={`px-6 py-3 rounded text-white transition ${
            updateLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gray-900 hover:bg-gray-700"
          }`}
        >
          {updateLoading ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
}

export default EditBlog;
