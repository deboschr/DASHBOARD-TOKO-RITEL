import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection_database.js";
import { people_tabel } from "./people-model.js";
export const products_tabel = sequelize.define(
	"products",
	{
		ID: {
			type: DataTypes.INTEGER,
			references: {
				model: people_tabel,
				key: "ID",
			},
		},
		MntWines: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		MntFruits: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		MntMeatProducts: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		MntFishProducts: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		MntSweetProducts: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		MntGoldProds: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
	},
	{
		tableName: "products",
		timestamps: false,
	}
);
