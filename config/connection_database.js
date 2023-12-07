import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "hmpg7764_manpro_tubes_jack",
  "hmpg7764_manpro_jack",
  "manpro_jack",
  {
    host: "hmpsars.id",
    dialect: "mysql",
  }
);

// Coba koneksi ke database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export { sequelize };
