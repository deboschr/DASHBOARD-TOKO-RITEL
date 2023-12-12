import { isEmpty } from "../models/data-checking-query.js";
import { aggregate_data_query } from "../models/aggregate-query.js";
import { retrieve_scatter_data } from "../models/retrieve-query.js";

export const dashboard_page = async (req, res) => {
	try {
		const check_model = await isEmpty();

		if (check_model.success && check_model.result) {
			res.redirect("/import-data");
		}

		const operator = "AVG";
		const colAggregate = "Income";
		const colGroupBy = "Education";
		const colX = "Income";
		const colY = "MntFishProducts";

		const tablebarData = await aggregate_data_query(
			operator,
			colAggregate,
			colGroupBy
		);

		const scatterData = await retrieve_scatter_data(colX, colY);

		if (tablebarData.succcess && scatterData.success) {
			res.render("dashboard-page", {
				title: "Dashboard",
				layout: "layouts/main",
				style: "dashboard-style.css",
				script: "dashboard-script.js",
				active: "dashboard",
				tablebarData: tablebarData.result,
				scatterData: scatterData.result,
			});
		} else if (!tablebarData.succcess) {
			res.send(tablebarData.error);
		} else {
			res.send(scatterData.error);
		}
	} catch (error) {
		console.log(error);
	}
};
