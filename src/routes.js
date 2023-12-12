import express from "express";

import {
	import_data_page,
	import_data,
} from "./controllers/import-data-controller.js";
import {
	table_page,
	aggregate_data_table,
} from "./controllers/table-controller.js";
import {
	bar_chart_page,
	aggregate_data_bar,
} from "./controllers/bar-chart-controller.js";
import {
	scatter_plot_page,
	aggregate_data_scatter,
} from "./controllers/scatter-plot-controller.js";
import { dashboard_page } from "./controllers/dashboard-controller.js";

const router = express.Router();

// Get route
router.get("/", import_data_page);
router.get("/import-data", import_data_page);
router.get("/dashboard", dashboard_page);
router.get("/table", table_page);
router.get("/bar-chart", bar_chart_page);
router.get("/scatter-plot", scatter_plot_page);

// Post route
router.post("/import-data", import_data);
router.post("/table", aggregate_data_table);
router.post("/bar-chart", aggregate_data_bar);
router.post("/scatter-plot", aggregate_data_scatter);

export default router;
