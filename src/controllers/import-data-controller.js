import { input_all_data_db } from "../models/all-data-model.js";
import { save_data } from "../utils/save-data-util.js";
import { parse_data } from "../utils/parse-data-util.js";

export const import_data_page = (req, res) => {
	res.render("import-data-page");
};

export const import_data = async (req, res) => {
	try {
		if (!req.files || !req.files.docUpload) {
			return res.status(400).send("No files were uploaded.");
		}

		const docFile = req.files.docUpload;
		const resSave = await save_data(docFile);
		const resPers = await parse_data(docFile, resSave.filePath);

		const resInput = await input_all_data_db(resPers.records);
		if (!resInput.success) {
			return res.status(500).json({
				from: resInput.from,
				details: resInput.error,
			});
		}

		res.redirect("/dashboard");
	} catch (error) {
		console.error(error);
		res.status(500).send("Import dokumen gagal", error);
	}
};
