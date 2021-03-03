const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

module.exports = async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: `${(Math.random() * 300) / 5}`,
    birthday: new Date(1980, 6, 20),
  });
  console.log(jane.toJSON());
};
