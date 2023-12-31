import express from "express";

import {
	import_data_page,
	import_data,
} from "./controllers/import-data-controller.js";
import { aggregate_page } from "./controllers/aggregate-controller.js";
import { bar_chart_page } from "./controllers/bar-chart-controller.js";
import { scatter_plot_page } from "./controllers/scatter-plot-controller.js";
import { dashboard_page } from "./controllers/dashboard-controller.js";

const router = express.Router();

// Get routes
router.get("/", import_data_page);
router.get("/import-data", import_data_page);
router.get("/dashboard", dashboard_page);
router.get("/aggregate", aggregate_page);
router.get("/bar-chart", bar_chart_page);
router.get("/scatter-plot", scatter_plot_page);

// Post routes
router.post("/home", import_data);

export default router;
