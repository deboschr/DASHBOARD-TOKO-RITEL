import { Sequelize } from "sequelize";

const sequelize = new Sequelize("tubes_manpro", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

// const sequelize = new Sequelize(
// 	"egglesia_tubes_jack",
// 	"egglesia_tubes_jack",
// 	"manpro_tubes_jack",
// 	{
// 		host: "egglesia.com",
// 		dialect: "mysql",
// 	}
// );

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
