const Router = require("express");
const router = new Router();
const serviceController = require("../controllers/serviceController");

router.post("/create", serviceController.create);
router.get("/", serviceController.getAll);
router.post("/edit", serviceController.edit);

module.exports = router;
