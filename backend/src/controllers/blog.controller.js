

import prisma from "../config/prisma.js";

import imagekit from "../utils/imagekit.js";


export const createBlog = async (req, res) => {
  try {
    const { title, slug, content, metaTitle, metaDescription } = req.body;

    let imageUrl = null;
    let imageFileId = null;

    if (req.file) {
      const uploadedImage = await imagekit.upload({
        file: req.file.buffer.toString("base64"),
        fileName: req.file.originalname,
        folder: "blogs",
      });

      imageUrl = uploadedImage.url;
      imageFileId = uploadedImage.fileId;   // 
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        metaTitle,
        metaDescription,
        image: imageUrl,
        imageFileId: imageFileId,  
      },
    });

    res.status(201).json({ success: true, blog });

  } catch (error) {
    console.log("CREATE ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
};



export const getAllBlogs = async (req, res) => {

    try {
        const blogs = await prisma.blog.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        res.status(200).json({
            success: true,
            blogs
        })
    } catch (error) {

        return res.status(500).json({ error: "Server error", error });

    }

}

export const getSingleBlog = async (req, res) => {

    try {
        const singleBlog = await prisma.blog.findUnique({
            where: {
                slug: req.params.slug
            }
        })
        if (!singleBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        return res.status(200).json({
            success: true,
            singleBlog
        })
    } catch (error) {
        return res.status(500).json({ error: "Server error", error });


    }

}


export const deleteBlog = async (req, res) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: Number(req.params.id) }
    });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    //  Delete from ImageKit using fileId
    if (blog.imageFileId) {
      await imagekit.deleteFile(blog.imageFileId);
    }

    await prisma.blog.delete({
      where: { id: Number(req.params.id) }
    });

    res.json({ success: true, message: "Blog deleted" });

  } catch (error) {
    console.log("DELETE ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
};
