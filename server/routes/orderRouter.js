const Router = require("express");
const router = new Router();
const orderController = require("../controllers/orderController");

router.post("/create", orderController.create);
router.get("/", orderController.getAll);
router.post("/edit", orderController.edit);
router.post("/delete", orderController.deleteOrder);

module.exports = router;
