import { MarketingCampaignModel } from "./marketing-campaign-model.js";

export const retrieve_scatter_data = async (colX, colY) => {
	try {
		// Fetching data based on colX and colY provided
		const result = await MarketingCampaignModel.findAll({
			attributes: [colX, colY],
		});

		// Formatting the result into an array of objects
		const scatterData = result.map((row) => ({
			[colX]: row.get(colX),
			[colY]: row.get(colY),
		}));

		// Converting the result to JSON
		const jsonResult = JSON.stringify(scatterData, null, 2);

		return { success: true, result: jsonResult };
	} catch (error) {
		return { success: false, error: error.message };
	}
};
