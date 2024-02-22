const ApiError = require("../error/ApiError");
const { Order } = require("../models/models");
const serviceController = require("./serviceController");

class OrderController {
  async create(req, res) {
    const { price, dateOfRecord, clientId, serviceId, subsectionId } = req.body;
    const order = await Order.create({
      price,
      dateOfRecord,
      clientId,
      serviceId,
      subsectionId,
    });
    return res.json({ order });
  }

  async getAll(req, res) {
    const orders = await Order.findAll();
    return res.json(orders);
  }

  async rewrite(req, res) {}
}

module.exports = new OrderController();
