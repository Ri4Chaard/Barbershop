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

  async deleteOrder(req, res, next) {
    const orderId = req.body.id;
    const order = await Order.findByPk(orderId);

    await order.destroy();

    return res.json({ order });
  }

  async edit(req, res, next) {
    let client, service, subsection, clientName, serviceName, subsectionName;

    const orderId = req.body.id;
    const newPrice = req.body.price;
    const newDateOfRecord = req.body.dateOfRecord;
    const newClientId = req.body.clientId;
    const newServiceId = req.body.serviceId;
    const newSubsectionId = req.body.subsectionId;

    client = await Client.findByPk(newClientId).then((data) => {
      clientName = data.pib;
    });
    service = await Service.findByPk(newServiceId).then((data) => {
      serviceName = data.name;
    });
    subsection = await Subsection.findByPk(newSubsectionId).then((data) => {
      subsectionName = data.address;
    });

    const order = await Order.findByPk(orderId);

    if (order) {
      order.price = newPrice;
      order.dateOfRecord = newDateOfRecord;
      order.clientName = clientName;
      order.serviceName = serviceName;
      order.subsectionName = subsectionName;
      order.clientId = newClientId;
      order.serviceId = newServiceId;
      order.subsectionId = newSubsectionId;
      await order.save();
    }
    return res.json({ order });
  }
}

module.exports = new OrderController();
