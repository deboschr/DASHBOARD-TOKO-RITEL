import { isEmpty } from "../models/data-checking-query.js";
import { aggregate_data_query } from "../models/aggregate-query.js";

export const table_page = async (req, res) => {
	try {
		const check_model = await isEmpty();

		if (check_model.success && check_model.result) {
			res.redirect("/import-data");
		}

		res.render("table-page", {
			title: "Table",
			layout: "layouts/main",
			style: "table-style.css",
			script: "table-script.js",
			active: "table",
			propAggregate: "null",
			dataAggregate: "null",
		});
	} catch (error) {
		console.log(error);
	}
};

export const aggregate_data_table = async (req, res) => {
	try {
		const { operator, colAggregate, colGroupBy } = req.body;

		const aggregateResult = await aggregate_data_query(
			operator,
			colAggregate,
			colGroupBy
		);

		const propAggregate = { operator, colAggregate, colGroupBy };

		if (aggregateResult.succcess) {
			res.render("table-page", {
				title: "Table",
				layout: "layouts/main",
				style: "table-style.css",
				script: "table-script.js",
				active: "table",
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
