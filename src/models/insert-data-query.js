import { MarketingCampaignModel } from "./marketing-campaign-model.js";
export const insert_data_query = async (records) => {
	try {
		await Promise.all(
			records.map(async (row, index) => {
				if (index > 0) {
					await MarketingCampaignModel.create({
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
				}
			})
		);

		return { success: true };
	} catch (error) {
		return { success: false, error: error.message };
	}
};
