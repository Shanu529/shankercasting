

import express from "express";

import { createBlog, getSingleBlog, deleteBlog, getAllBlogs, updateBlog } from "../controllers/blog.controller.js";
import { authMiddleware, isAdmin } from "../middlewares/auth.middlerware.js";
import upload from "../middlewares/upload.js";


const router = express.Router();



router.post("/",upload.single("image"), authMiddleware, isAdmin, createBlog);

router.get("/", getAllBlogs);
router.get("/:slug", getSingleBlog);

router.put("/:id", upload.single("image"), authMiddleware, isAdmin, updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);


export default router;