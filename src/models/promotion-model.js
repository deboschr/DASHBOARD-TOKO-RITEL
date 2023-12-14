import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection_database.js";
import { PeopleModel } from "./people-model.js";
export const PromotionModel = sequelize.define(
	"promotion",
	{
		ID: {
			type: DataTypes.INTEGER,
			autoIncrement: false,
		},
		NumDealsPurchases: {
			type: DataTypes.DECIMAL,
		},
		AcceptedCmp1: {
			type: DataTypes.DECIMAL,
		},
		AcceptedCmp2: {
			type: DataTypes.DECIMAL,
		},
		AcceptedCmp3: {
			type: DataTypes.DECIMAL,
		},
		AcceptedCmp4: {
			type: DataTypes.DECIMAL,
		},
		AcceptedCmp5: {
			type: DataTypes.DECIMAL,
		},
		Response: {
			type: DataTypes.DECIMAL,
		},
	},
	{
		tableName: "promotion",
		timestamps: false,
	}
);
export const input_promotion_data_db = async (records) => {
	try {
		await Promise.all(
			records.map(async (row, index) => {
				if (index > 0) {
					await PromotionModel.create({
						ID: row[0],
						NumDealsPurchases: row[15],
						AcceptedCmp3: row[20],
						AcceptedCmp4: row[21],
						AcceptedCmp5: row[22],
						AcceptedCmp1: row[23],
						AcceptedCmp2: row[24],
						Response: row[28],
					});
				}
			})
		);

		return { success: true };
	} catch (error) {
		return { success: false, error: error.message, from: "Promotion model" };
	}
};
