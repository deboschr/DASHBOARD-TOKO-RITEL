import { insert_data_query } from "../models/insert-data-query.js";
import { isEmpty } from "../models/data-checking-query.js";
import { save_data } from "../utils/save-data-util.js";
import { parse_data } from "../utils/parse-data-util.js";

export const import_data_page = async (req, res) => {
	try {
		const check_model = await isEmpty();

		res.render("import-data-page", {
			title: "Import Data",
			layout: "layouts/main",
			style: "import-data-style.css",
			script: "import-data-script.js",
			active: "import-data",
			isAllow: check_model.result,
		});
	} catch (error) {
		console.log(error);
	}
};

export const import_data = async (req, res) => {
	try {
		if (!req.files || !req.files.docUpload) {
			return res.status(400).send("No files were uploaded.");
		}

		const docFile = req.files.docUpload;
		const resSave = await save_data(docFile);
		const resPers = await parse_data(docFile, resSave.filePath);

		const resInput = await insert_data_query(resPers.records);
		if (!resInput.success) {
			return res.status(500).json({
				from: resInput.from,
				details: resInput.error,
			});
		}

		res.redirect("/dashboard");
	} catch (error) {
		res.status(500).send("Import dokumen gagal", error);
	}
};
