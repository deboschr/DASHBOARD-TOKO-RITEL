import express from "express";
import path from "path";
import routes from "./routes.js";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";

const app = express();
const staticPathPublic = path.resolve("public");

app.set("view engine", "ejs");

app.use(express.static(staticPathPublic));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use("/", routes);

app.listen(8000, () => {
	console.log(`>> Server is running on http://localhost:${8000}`);
});
