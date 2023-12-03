import { people_tabel } from "../models/people-model.js";
import { place_tabel } from "../models/place-model.js";
import { products_tabel } from "../models/products-model.js";
import { promotion_tabel } from "../models/promotion-model.js";

export const home_page = (req, res) => {
	res.render("home-page");
};

export const import_data = (req, res) => {
	res.render("home-page");
};
