const { Router } = require("express");
const commentController = require("../controllers/comments");

const router = Router();

router.get("/posts/:id/comments", commentController.get);
router.post("/comments", commentController.addComm);
router.delete("/comments/:id", commentController.delete);
router.patch("/comments/:id", commentController.update);

module.exports = router;
