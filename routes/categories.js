const { Router } = require("express");
const router = Router();
const {
  getCategories,
  getCategoriesById,
  postCategory,
  deleteCategories,
  patchCategories,
} = require("../controllers/categories");

router.get("/categories", getCategories);
router.get("/categories/:id", getCategoriesById);
router.post("/categories", postCategory);
router.delete("/categories/:id", deleteCategories);
router.put("/categories/:id", patchCategories);

module.exports = router;
