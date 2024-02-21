const ApiError = require("../error/ApiError");

class ClientController {
  async add(req, res) {}

  async read(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("ID is not indicated"));
    }
    res.json(id);
  }

  async rewrite(req, res) {}
}

module.exports = new ClientController();
