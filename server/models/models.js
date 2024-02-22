const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Client = sequelize.define("client", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  pib: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING, unique: true },
  gender: { type: DataTypes.STRING },
  numOfVisists: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Service = sequelize.define("service", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER },
});

const Subsection = sequelize.define("subsection", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  address: { type: DataTypes.STRING, unique: true },
});

const Order = sequelize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  price: { type: DataTypes.INTEGER },
  dateOfRecord: { type: DataTypes.DATE },
  clientName: { type: DataTypes.STRING },
  serviceName: { type: DataTypes.STRING },
  subsectionName: { type: DataTypes.STRING },
});

Client.hasMany(Order);
Order.belongsTo(Client);

Service.hasMany(Order);
Order.belongsTo(Service);

Subsection.hasMany(Order);
Order.belongsTo(Subsection);

module.exports = {
  Client,
  Service,
  Subsection,
  Order,
};
