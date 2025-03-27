const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all posts
const getAllPosts = async () => {
  return await prisma.post.findMany({
    include: {
      author: true, // Include the author data
    },
  });
};

// Get a post by ID
const getPostById = async (id) => {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      author: true, // Include the author data
    },
  });
};

// Create a new post
const createPost = async (data) => {
  return await prisma.post.create({
    data,
  });
};

// Update a post
const updatePost = async (id, data) => {
  return await prisma.post.update({
    where: { id },
    data,
  });
};

// Delete a post
const deletePost = async (id) => {
  return await prisma.post.delete({
    where: { id },
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
