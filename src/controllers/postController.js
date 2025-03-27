const postModel = require('../models/postModel');

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

// Get a post by ID
const getPostById = async (req, res) => {
  try {
    const post = await postModel.getPostById(parseInt(req.params.id));
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content, published, authorId } = req.body;
    const newPost = await postModel.createPost({
      title,
      content,
      published,
      authorId,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const { title, content, published, authorId } = req.body;
    const updatedPost = await postModel.updatePost(postId, {
      title,
      content,
      published,
      authorId,
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    await postModel.deletePost(postId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
