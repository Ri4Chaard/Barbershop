const Router = require("express");
const router = new Router();
const clientController = require("../controllers/clientController");

router.get("/", clientController.getAll);
router.post("/create", clientController.create);
router.post("/edit", clientController.edit);
router.post("/delete", clientController.deleteClient);

module.exports = router;
