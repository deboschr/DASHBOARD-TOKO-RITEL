import { isEmpty } from "../models/data-checking-query.js";
import { retrieve_scatter_data } from "../models/retrieve-query.js";

export const scatter_plot_page = async (req, res) => {
	try {
		const check_model = await isEmpty();

		if (check_model.success && check_model.result) {
			res.redirect("/import-data");
		}
		res.render("scatter-plot-page", {
			title: "Scatter Plot",
			layout: "layouts/main",
			style: "scatter-plot-style.css",
			script: "scatter-plot-script.js",
			active: "scatter-plot",
			propAggregate: "null",
			dataAggregate: "null",
		});
	} catch (error) {
		console.log(error);
	}
};

export const aggregate_data_scatter = async (req, res) => {
	try {
		const { colX, colY } = req.body;

		const scatterData = await retrieve_scatter_data(colX, colY);
		const propAggregate = { colX, colY };
		if (scatterData.success) {
			res.render("scatter-plot-page", {
				title: "Scatter Plot",
				layout: "layouts/main",
				style: "scatter-plot-style.css",
				script: "scatter-plot-script.js",
				active: "scatter-plot",
				propAggregate: JSON.stringify(propAggregate),
				dataAggregate: scatterData.result,
			});
		} else {
			res.send(scatterData.error);
		}
	} catch (error) {
		res.send(error);
	}
};
