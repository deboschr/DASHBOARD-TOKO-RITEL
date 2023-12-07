import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection_database.js";
import { PeopleModel } from "./people-model.js";
export const PlaceModel = sequelize.define(
	"place",
	{
		ID: {
			type: DataTypes.INTEGER,
			autoIncrement: false,
		},
		NumWebPurchases: {
			type: DataTypes.INTEGER,
		},
		NumCatalogPurchases: {
			type: DataTypes.INTEGER,
		},
		NumStorePurchases: {
			type: DataTypes.INTEGER,
		},
		NumWebVisitsMonth: {
			type: DataTypes.INTEGER,
		},
	},
	{
		tableName: "place",
		timestamps: false,
	}
);
PlaceModel.belongsTo(PeopleModel, {
	foreignKey: "ID",
});

export const input_place_data_db = async (records) => {
	try {
		await Promise.all(
			records.map(async (row, index) => {
				if (index > 0) {
					await PlaceModel.create({
						ID: row[0],
						NumWebPurchases: row[16],
						NumCatalogPurchases: row[17],
						NumStorePurchases: row[18],
						NumWebVisitsMonth: row[19],
					});
				}
			})
		);

		return { success: true };
	} catch (error) {
		return { success: false, error: error.message, from: "Place model" };
	}
};
