import fs from "fs";
import { parse } from "csv-parse";

export const parse_data = async (docFile, docPath) => {
	try {
		const records = [];

		const parser = parse({
			delimiter: ";",
		});

		const fileStream = fs.createReadStream(docPath);

		fileStream.on("error", (err) => {
			throw new Error(`Error reading file: ${err}`);
		});

		parser.on("readable", function () {
			let record;
			while ((record = parser.read()) !== null) {
				records.push(record);
			}
		});

		parser.on("error", function (err) {
			console.error(err.message);
		});

		await new Promise((resolve, reject) => {
			parser.on("end", () => {
				resolve();
			});
			fileStream.pipe(parser);
		});

		return { success: true, records: records };
	} catch (error) {
		return { success: false, error: error.message };
	}
};
