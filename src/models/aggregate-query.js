import { sequelize } from "../../config/connection-database.js";
import { MarketingCampaignModel } from "./marketing-campaign-model.js";
export const aggregate_data_query = async (
	operator,
	colAggregate,
	colGroupBy
) => {
	try {
		// Mengambil data berdasarkan operator, colAggregate, dan colGroupBy yang diberikan
		const result = await MarketingCampaignModel.findAll({
			attributes: [
				colGroupBy,
				[
					sequelize.fn(operator, sequelize.col(colAggregate)),
					"AggregateResult",
				],
			],
			group: [colGroupBy],
		});

		// Mengumpulkan hasil ke dalam bentuk objek JSON
		const aggregatedData = result.map((row) => ({
			[colGroupBy]: row.get(colGroupBy),
			AggregateResult: row.get("AggregateResult"),
		}));

		// Menyimpan hasil dalam bentuk JSON
		const jsonResult = JSON.stringify(aggregatedData, null, 2);

		return { succcess: true, result: jsonResult };
	} catch (error) {
		return { success: false, error: error.message };
	}
};
