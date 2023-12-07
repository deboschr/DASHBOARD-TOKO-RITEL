import fs from "fs";
import assert from "assert";
import { parse } from "csv-parse";
import xlsx from "xlsx";

export const parse_data = async (docFile, docPath) => {
	try {
		const records = [];

		if (docFile.mimetype === "application/vnd.ms-excel") {
			// If uploaded file is .xlsx format
			const workbook = xlsx.readFile(docPath);
			const sheetName = workbook.SheetNames[0];

			records = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
		} else if (docFile.mimetype === "text/csv") {
			// If uploaded file is .csv format
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
		} else {
			throw new Error("Unsupported file format.");
		}

		return { success: true, records: records };
	} catch (error) {
		console.error("Error parsing file:", error);
		return { success: false, error: error.message };
	}
};
