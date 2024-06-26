const ApiError = require("../error/ApiError");
const { Subsection } = require("../models/models");

class SubsectionController {
  async create(req, res) {
    const { address } = req.body;
    const subsection = await Subsection.create({ address });
    return res.json({ subsection });
  }

  async deleteSubsection(req, res, next) {
    const subsectionId = req.body.id;
    const subsection = await Subsection.findByPk(subsectionId);

    await subsection.destroy();

    return res.json({ order });
  }

  async getAll(req, res) {
    const subsections = await Subsection.findAll();
    return res.json(subsections);
  }
}
module.exports = new SubsectionController();
