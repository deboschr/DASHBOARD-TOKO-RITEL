import { isEmpty } from "../models/data-checking-query.js";
import { aggregate_data_query } from "../models/aggregate-query.js";

export const bar_chart_page = async (req, res) => {
	try {
		const check_model = await isEmpty();

		if (check_model.success && check_model.result) {
			res.redirect("/import-data");
		}

		res.render("bar-chart-page", {
			title: "Bar Chart",
			layout: "layouts/main",
			style: "bar-chart-style.css",
			script: "bar-chart-script.js",
			active: "bar-chart",
			propAggregate: "null",
			dataAggregate: "null",
		});
	} catch (error) {
		console.log(error);
	}
};

export const aggregate_data_bar = async (req, res) => {
	try {
		const { operator, colAggregate, colGroupBy } = req.body;

		const aggregateResult = await aggregate_data_query(
			operator,
			colAggregate,
			colGroupBy
		);

		const propAggregate = { operator, colAggregate, colGroupBy };

		if (aggregateResult.succcess) {
			res.render("bar-chart-page", {
				title: "Bar Chart",
				layout: "layouts/main",
				style: "bar-chart-style.css",
				script: "bar-chart-script.js",
				active: "bar-chart",
				propAggregate: JSON.stringify(propAggregate),
				dataAggregate: aggregateResult.result,
			});
		} else {
			res.send(aggregateResult.error);
		}
	} catch (error) {
		res.send(error);
	}
};
