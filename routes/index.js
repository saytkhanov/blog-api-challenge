const { Router } = require("express");
const router = Router();

router.use(require("./categories"));
router.use(require("./comments"));
router.use(require("./posts"));

module.exports = router;
