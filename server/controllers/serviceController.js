const ApiError = require("../error/ApiError");
const { Service } = require("../models/models");

class ServiceController {
  async create(req, res, next) {
    try {
      const { name, price } = req.body;
      const service = await Service.create({ name, price });
      return res.json({ service });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const services = await Service.findAll();
    return res.json(services);
  }

  async deleteService(req, res, next) {
    const serviceId = req.body.id;
    const service = await Service.findByPk(serviceId);

    await service.destroy();

    return res.json({ service });
  }

  async edit(req, res, next) {
    const serviceId = req.body.id;
    const newName = req.body.name;
    const newPrice = req.body.price;

    const service = await Service.findByPk(serviceId);

    if (service) {
      service.name = newName;
      service.price = newPrice;
      await service.save();
    }
    return res.json({ service });
  }
}

module.exports = new ServiceController();
