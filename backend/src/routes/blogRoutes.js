

import express from "express";

import { createBlog, getSingleBlog, deleteBlog, getAllBlogs } from "../controllers/blog.controller.js";
import { authMiddleware, isAdmin } from "../middlewares/auth.middlerware.js";
import upload from "../middlewares/upload.js";


const router = express.Router();



router.post("/",upload.single("image"), authMiddleware, isAdmin, createBlog);

router.get("/", getAllBlogs);
router.get("/:slug", getSingleBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);


export default router;