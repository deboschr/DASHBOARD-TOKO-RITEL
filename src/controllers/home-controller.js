import { input_people_data_db } from "../models/people-model.js";
import { input_place_data_db } from "../models/place-model.js";
import { input_products_data_db } from "../models/products-model.js";
import { input_promotion_data_db } from "../models/promotion-model.js";
import { save_data } from "../utils/save-data-util.js";
import { parse_data } from "../utils/parse-data-util.js";

export const home_page = (req, res) => {
	res.render("home-page");
};
export const import_data = async (req, res) => {
	try {
		if (!req.files || !req.files.docUpload) {
			return res.status(400).send("No files were uploaded.");
		}

		const docFile = req.files.docUpload;
		const resSave = await save_data(docFile);
		const resPers = await parse_data(docFile, resSave.filePath);

		const resIntPeople = await input_people_data_db(resPers.records);
		if (!resIntPeople.success) {
			return res.status(500).json({
				from: resIntPeople.from,
				details: resIntPeople.error,
			});
		}
		const resIntPlace = await input_place_data_db(resPers.records);
		if (!resIntPlace.success) {
			return res.status(500).json({
				from: resIntPlace.from,
				details: resIntPlace.error,
			});
		}
		const resIntProduct = await input_products_data_db(resPers.records);
		if (!resIntProduct.success) {
			return res.status(500).json({
				from: resIntProduct.from,
				details: resIntProduct.error,
			});
		}
		const resIntPromotion = await input_promotion_data_db(resPers.records);
		if (!resIntPromotion.success) {
			return res.status(500).json({
				from: resIntPromotion.from,
				details: resIntPromotion.error,
			});
		}
		res.redirect("/dashboard");
	} catch (error) {
		console.error(error);
		res.status(500).send("Import dokumen gagal", error);
	}
};
