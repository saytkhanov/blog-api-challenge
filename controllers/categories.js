const Category = require('../models/Category');


const controllers = {
  getCategories: async (req, res) => {
    const categories = await Category.find()
    res.json(categories)
  },
  getCategoriesById: async (req, res) => {
    const categoriesById = await Category.findById({id: req.params.id})

    res.json(categoriesById)
  },
  postCategory: async (req, res) => {
    const addCategories = await new Category({
      name: req.body.name
    })
    await addCategories.save()
    res.json(addCategories)
  },
  deleteCategories: async (req, res) => {
    const deleteCategories = await Category.findByIdAndDelete({id: req.params.id})
    res.json(deleteCategories)
  },
  patchCategories: async (req, res) => {
    const id = req.params.id;
    const name = req.body;
    const options = {new: true}
    const patchCategories = await Category.findByIdAndUpdate(id, name, options)
    res.json(patchCategories)
  }
}

module.exports = controllers