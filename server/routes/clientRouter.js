const Router = require("express");
const router = new Router();
const clientController = require("../controllers/clientController");

router.get("/", clientController.getAll);
router.post("/create", clientController.create);
module.exports = router;
