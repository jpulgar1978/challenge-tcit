import { Router } from "express";
import {
  createPost,
  getPosts,
  deletePost
} from "../controllers/post.controller.js";

const router = Router();

// Routes
router.post("/", createPost);
router.delete("/:id", deletePost);
router.get("/", getPosts);

export default router;