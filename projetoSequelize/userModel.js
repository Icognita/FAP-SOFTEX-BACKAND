const { DataTypes } = require(Sequelize);
import db from "../db";

const User = db.define("user", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = User;