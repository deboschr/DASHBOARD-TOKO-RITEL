import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection_database.js";
import { people_tabel } from "./people-model.js";
import { place_tabel } from "./place-model.js";
import { products_tabel } from "./products-model.js";
import { promotion_tabel } from "./promotion-model.js";

export const all_data_tabel = sequelize.define(
	"all_data",
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
		NumWebVisitsMonth: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
		tableName: "all_data",
		timestamps: false,
	}
);
export const input_all_data_db = async (records) => {
	try {
		await Promise.all(
			records.map(async (row) => {
				await all_data_tabel.create({
					ID: row[0],
					Year_Birth: row[1],
					Education: row[2],
					Marital_Status: row[3],
					Income: row[4],
					Kidhome: row[5],
					Teenhome: row[6],
					Dt_Customer: row[7],
					Recency: row[8],
					MntWines: row[9],
					MntFruits: row[10],
					MntMeatProducts: row[11],
					MntFishProducts: row[12],
					MntSweetProducts: row[13],
					MntGoldProds: row[14],
					NumDealsPurchases: row[15],
					NumWebPurchases: row[16],
					NumCatalogPurchases: row[17],
					NumStorePurchases: row[18],
					NumWebVisitsMonth: row[19],
					AcceptedCmp3: row[20],
					AcceptedCmp4: row[21],
					AcceptedCmp5: row[22],
					AcceptedCmp1: row[23],
					AcceptedCmp2: row[24],
					Complain: row[25],
					Response: row[28],
				});
			})
		);

		return { success: true };
	} catch (error) {
		console.error("Error inserting data into database:", error);
		return { success: false, error: error.message };
	}
};

// export const separate_tables = async () => {
// 	try {
// 		// Ambil data dari all_data
// 		const allData = await all_data_tabel.findAll();

// 		// Memproses data menggunakan map dan async/await
// 		const peopleRecords = await Promise.all(
// 			allData.map(async (row) => {
// 				await people_tabel.create({
// 					ID: row.ID,
// 					Year_Birth: row.Year_Birth,
// 					Education: row.Education,
// 					Marital_Status: row.Marital_Status,
// 					Income: row.Income,
// 					Kidhome: row.Kidhome,
// 					Teenhome: row.Teenhome,
// 					Dt_Customer: row.Dt_Customer,
// 					Recency: row.Recency,
// 					Complain: row.Complain,
// 				});
// 			})
// 		);
// 		await Promise.all(
// 			allData.map(async (row, index) => {
// 				await products_tabel.create({
// 					ID: peopleRecords[index].ID,
// 					MntWines: row.MntWines,
// 					MntFruits: row.MntFruits,
// 					MntMeatProducts: row.MntMeatProducts,
// 					MntFishProducts: row.MntFishProducts,
// 					MntSweetProducts: row.MntSweetProducts,
// 					MntGoldProds: row.MntGoldProds,
// 				});
// 			})
// 		);
// 		await Promise.all(
// 			allData.map(async (row, index) => {
// 				await promotion_tabel.create({
// 					ID: peopleRecords[index].ID,
// 					NumDealsPurchases: row.NumDealsPurchases,
// 					AcceptedCmp1: row.AcceptedCmp1,
// 					AcceptedCmp2: row.AcceptedCmp2,
// 					AcceptedCmp3: row.AcceptedCmp3,
// 					AcceptedCmp4: row.AcceptedCmp4,
// 					AcceptedCmp5: row.AcceptedCmp5,
// 					Response: row.Response,
// 				});
// 			})
// 		);
// 		await Promise.all(
// 			allData.map(async (row, index) => {
// 				await place_tabel.create({
// 					ID: peopleRecords[index].ID,
// 					NumWebPurchases: row.NumWebPurchases,
// 					NumCatalogPurchases: row.NumCatalogPurchases,
// 					NumStorePurchases: row.NumStorePurchases,
// 					NumWebVisitsMonth: row.NumWebVisitsMonth,
// 				});
// 			})
// 		);
// 		return { success: true };
// 	} catch (error) {
// 		console.error("Error while separating data:", error);
// 		return { success: false, error: error.message };
// 	}
// };
