const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Client = sequelize.define("client", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  pib: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING, unique: true },
  gender: { type: DataTypes.STRING },
  numOfVisists: { type: DataTypes.INTEGER },
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
});
