const Router = require("express");
const router = new Router();
const subsectionController = require("../controllers/subsectionController");

router.post("/create", subsectionController.create);
router.get("/", subsectionController.getAll);
router.post("/delete", subsectionController.deleteSubsection);

module.exports = router;
