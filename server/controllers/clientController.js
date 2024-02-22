const ApiError = require("../error/ApiError");
const { Client } = require("../models/models");

class ClientController {
  async create(req, res, next) {
    try {
      const { pib, phone, gender } = req.body;
      const client = await Client.create({ pib, phone, gender });
      return res.json({ client });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    const clients = await Client.findAll();
    return res.json(clients);
  }
}

module.exports = new ClientController();
