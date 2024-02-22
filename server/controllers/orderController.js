const ApiError = require("../error/ApiError");
const { Order, Client, Service, Subsection } = require("../models/models");
const serviceController = require("./serviceController");

class OrderController {
  async create(req, res, next) {
    let price,
      client,
      service,
      subsection,
      clientName,
      serviceName,
      subsectionName;
    const { dateOfRecord, clientId, serviceId, subsectionId } = req.body;

    try {
      client = await Client.findByPk(clientId);
      service = await Service.findByPk(serviceId);
      subsection = await Subsection.findByPk(subsectionId);

      clientName = client.pib;
      serviceName = service.name;
      subsectionName = subsection.address;

      client.numOfVisists += 1;
      if (client.numOfVisists >= 5) {
        price = service.price * 0.9;
      } else {
        price = service.price;
      }
      const order = await Order.create({
        price,
        dateOfRecord,
        clientName,
        serviceName,
        subsectionName,
        clientId,
        serviceId,
        subsectionId,
      });

      await client.save();

      return res.json({ order });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
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

    let client, service, subsection, clientName, serviceName, subsectionName;

    const order = await Order.findByPk(orderId);

    if (order) {
      client = await Client.findByPk(order.clientId);
      service = await Service.findByPk(order.serviceId);
      subsection = await Subsection.findByPk(order.subsectionId);

      order.price = newPrice;
      order.dateOfRecord = newDateOfRecord;
      order.clientName = client.pib;
      order.serviceName = service.name;
      order.subsectionName = subsection.address;
      order.clientId = newClientId;
      order.serviceId = newServiceId;
      order.subsectionId = newSubsectionId;
      await order.save();
    }
    return res.json({ order });
  }
}

module.exports = new OrderController();
