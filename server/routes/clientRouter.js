const Router = require("express");
const router = new Router();
const clientController = require("../controllers/clientController");

router.post("/");
router.get("/read", clientController.read);
router.post("/rewrite", clientController.rewrite);
router.post("/add", clientController.add);

module.exports = router;
