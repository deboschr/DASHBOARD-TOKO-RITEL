import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection_database.js";
export const people_tabel = sequelize.define(
	"people",
	{
		ID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		Year_Birth: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
		},
		Education: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Marital_Status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Income: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		Kidhome: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Teenhome: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Dt_Customer: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		Recency: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Complain: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
	},
	{
		tableName: "people",
		timestamps: false,
	}
);
