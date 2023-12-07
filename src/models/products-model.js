import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection_database.js";
import { PeopleModel } from "./people-model.js";
export const ProductsModel = sequelize.define(
	"products",
	{
		ID: {
			type: DataTypes.INTEGER,
			autoIncrement: false,
		},
		MntWines: {
			type: DataTypes.DECIMAL(10, 0),
		},
		MntFruits: {
			type: DataTypes.DECIMAL(10, 0),
		},
		MntMeatProducts: {
			type: DataTypes.DECIMAL(10, 0),
		},
		MntFishProducts: {
			type: DataTypes.DECIMAL(10, 0),
		},
		MntSweetProducts: {
			type: DataTypes.DECIMAL(10, 0),
		},
		MntGoldProds: {
			type: DataTypes.DECIMAL(10, 0),
		},
	},
	{
		tableName: "products",
		timestamps: false,
	}
);

export const input_products_data_db = async (records) => {
	try {
		await Promise.all(
			records.map(async (row, index) => {
				if (index > 0) {
					await ProductsModel.create({
						ID: row[0],
						MntWines: row[9],
						MntFruits: row[10],
						MntMeatProducts: row[11],
						MntFishProducts: row[12],
						MntSweetProducts: row[13],
						MntGoldProds: row[14],
					});
				}
			})
		);

		return { success: true };
	} catch (error) {
		return { success: false, error: error.message, from: "Products model" };
	}
};
