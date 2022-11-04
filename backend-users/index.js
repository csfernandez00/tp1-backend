const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const { application } = require("express");

const app = express();

dotenv.config();

app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
	console.log(`${process.env.MESSAGE} ${process.env.PORT}`);
});
