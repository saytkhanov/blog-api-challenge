const Post = require('../models/Post')
const controllers = {
  getPots: async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
  },
  getPostById: async (req, res) => {
    const posts = await Post.findById({
      _id: req.params.id
    })
    res.json(posts)
  },
  getPostCategoryId: async (req, res) => {
    const categories = await Post.findById({
      categoryId: req.params.id
    })
    res.json(categories)
  },
  post: async (req, res) => {
    const posts = new Post({
      title: req.body.title
    })
    await posts.save()
    res.json(posts)
  },
  patchPost: async (req, res) => {
    const postPatch = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      { title: req.body.title }, function () {
      })
    res.json(postPatch)
  },
  deletePost: async (req, res) => {
    const posts = await Post.findByIdAndDelete({
      _id: req.params.id
    })
    res.json(posts)
  }
}
module.exports = controllers


 