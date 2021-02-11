export default async (fast) => {
  // console.log(__dirname);
  const sequelizeConfig = {
    instance: "sequelize", // the name of fastify plugin instance.
    autoConnect: true, // auto authentication and test connection on first run

    // other sequelize config goes here
    dialect: "sqlite",

    // SQLite only
    storage: await import("./db.sqlite"),
  };
  fast.register(import("fastify-sequelize"), sequelizeConfig);
};
