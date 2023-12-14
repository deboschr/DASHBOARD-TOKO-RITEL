import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection_database.js";

export const PeopleModel = sequelize.define(
	"people",
	{
		ID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		Year_Birth: {
			type: DataTypes.INTEGER,
		},
		Education: {
			type: DataTypes.STRING,
		},
		Marital_Status: {
			type: DataTypes.STRING,
		},
		Income: {
			type: DataTypes.DECIMAL(10, 0),
		},
		Kidhome: {
			type: DataTypes.INTEGER,
		},
		Teenhome: {
			type: DataTypes.INTEGER,
		},
		Dt_Customer: {
			type: DataTypes.DATE,
		},
		Recency: {
			type: DataTypes.INTEGER,
		},
		Complain: {
			type: DataTypes.TINYINT,
		},
	},
	{
		tableName: "people",
		timestamps: false,
	}
);
export const input_people_data_db = async (records) => {
	try {
		await Promise.all(
			records.map(async (row, index) => {
				if (index > 0) {
					await PeopleModel.create({
						ID: row[0],
						Year_Birth: row[1],
						Education: row[2],
						Marital_Status: row[3],
						Income: row[4],
						Kidhome: row[5],
						Teenhome: row[6],
						Dt_Customer: row[7],
						Recency: row[8],
						Complain: row[25],
					});
				}
			})
		);

		return { success: true };
	} catch (error) {
		return { success: false, error: error.message, from: "People model" };
	}
};
