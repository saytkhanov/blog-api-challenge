const { Router } = require("express");
const {
  getPosts,
  getPostById,
  getPostCategoryId,
  post,
  patchPost,
  deletePost,
} = require("../controllers/posts");
const router = Router();

router.get("/posts", getPosts);

router.get("/posts/:id", getPostById);

router.get("/categories/:id/posts", getPostCategoryId);

router.post("/posts", post);

router.patch("/posts/:id", patchPost);

router.delete("/posts/:id", deletePost);

module.exports = router;
