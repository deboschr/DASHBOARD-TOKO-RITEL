import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection_database.js";
import { people_tabel } from "./people-model.js";
export const place_tabel = sequelize.define(
	"place",
	{
		ID: {
			type: DataTypes.INTEGER,
			references: {
				model: people_tabel,
				key: "ID",
			},
		},
		NumWebPurchases: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		NumCatalogPurchases: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		NumStorePurchases: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		NumWebVisitsPurchases: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "place",
		timestamps: false,
	}
);
