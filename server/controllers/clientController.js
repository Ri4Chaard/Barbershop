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

  async deleteClient(req, res, next) {
    const clientId = req.body.id;
    const client = await Client.findByPk(clientId);

    await client.destroy();

    return res.json({ client });
  }

  async edit(req, res, next) {
    const clientId = req.body.id;
    const newPib = req.body.pib;
    const newPhone = req.body.phone;
    const newGender = req.body.gender;

    const client = await Client.findByPk(clientId);

    if (client) {
      client.pib = newPib;
      client.phone = newPhone;
      client.gender = newGender;
      await client.save();
    }
    return res.json({ client });
  }
}

module.exports = new ClientController();
