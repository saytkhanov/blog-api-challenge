const { Router } = require('express');
const Post = require('../models/Post')
const { getPots, getPostById, getPostCategoryId, post, patchPost, deletePost} = require('../controllers/posts')
const router = Router()

router.get('/posts', async (req, res) => {
  const posts = await Post.find({})
  res.json(posts)
})

router.get('/posts/:id', async (req, res) => {
  const posts = await Post.findById({
     _id: req.params.id
  })
  res.json(posts)
})

router.get('/categories/:id/posts', async (req, res) => {
  const categories = await Post.findById({
    categoryId: req.params.id
  })
  res.json(categories)
})

router.post('/posts', async (req, res) => {
  const posts = new Post({
    title: req.body.title
  })
  await posts.save()
  res.json(posts)
})

router.patch('/', async (req, res) => {

const postPatch = await Post.findByIdAndUpdate(
  {_id: req.params.id},
  {title: req.body.title}, function () {})
res.json(postPatch)
})

router.delete('/posts/:id',
})

module.exports = router