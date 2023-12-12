import { MarketingCampaignModel } from "./marketing-campaign-model.js";
export const isEmpty = async () => {
	try {
		const count = await MarketingCampaignModel.count();

		let result = true;

		if (count > 0) {
			result = false;
		}

		return { success: true, result: result };
	} catch (error) {
		return { success: false, error: error.message };
	}
};
