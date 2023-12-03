import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection_database.js";
import { people_tabel } from "./people-model.js";
export const promotion_tabel = sequelize.define(
	"promotion",
	{
		ID: {
			type: DataTypes.INTEGER,
			references: {
				model: people_tabel,
				key: "ID",
			},
		},
		NumDealsPurchases: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		AcceptedCmp1: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		AcceptedCmp2: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		AcceptedCmp2: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		AcceptedCmp3: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		AcceptedCmp4: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		AcceptedCmp5: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		Response: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
	},
	{
		tableName: "promotion",
		timestamps: false,
	}
);
