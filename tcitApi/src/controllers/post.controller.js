import { Post } from "../models/Post.js";

export async function createPost(req, res) {
  try {
    const { nombre, descripcion } = req.body;
    const newPost = await Post.create({
      nombre,
      descripcion,
    });
    res.json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getPosts(req, res) {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "nombre", "descripcion"],
      order: [["id", "DESC"]],
    });
    res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deletePost(req, res) {
  const { id } = req.params;
  try {
    const post = await Post.findOne({
        where: { id },
        attributes: ["id", "nombre", "descripcion"],
      });

    if (post){
        try { 
            await Post.destroy({
                where: { id },
            });
            res.json(post);
        } catch(error){
            return res.status(500).json({ message: error.message });
        }
    }else{
        return res.status(400).json({ message: "Post Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
