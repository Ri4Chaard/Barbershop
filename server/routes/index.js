const Router = require("express");
const router = new Router();
const clientRouter = require("./clientRouter");
const orderRouter = require("./orderRouter");
const serviceRouter = require("./serviceRouter");
const subsectionRouter = require("./subsectionRouter");

router.use("/client", clientRouter);
router.use("/subsection", subsectionRouter);
router.use("/sevice", serviceRouter);
router.use("/order", orderRouter);

module.exports = router;
