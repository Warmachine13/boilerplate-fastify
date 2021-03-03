// const { resolve, dirname } = require("path");
// const { fileURLToPath } = require("url");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
// const path = require("path");

module.exports = sequelize;
