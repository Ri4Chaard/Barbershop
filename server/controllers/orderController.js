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

  async edit(req, res, next) {
    const orderId = req.body.id;
    const newPrice = req.body.price;
    const newDateOfRecord = req.body.dateOfRecord;
    const newClientId = req.body.clientId;
    const newServiceId = req.body.serviceId;
    const newSubsectionId = req.body.subsectionId;

    const order = await Order.findByPk(orderId);

    if (order) {
      order.price = newPrice;
      order.dateOfRecord = newDateOfRecord;
      order.clientId = newClientId;
      order.serviceId = newServiceId;
      order.subsectionId = newSubsectionId;
      await order.save();
    }
    return res.json({ order });
  }
}

module.exports = new OrderController();
