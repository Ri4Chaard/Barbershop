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

  async rewrite(req, res) {}
}

module.exports = new ServiceController();
