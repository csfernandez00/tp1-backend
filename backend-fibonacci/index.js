const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());

dotenv.config();

app.use("/api", routes);

app.listen(process.env.PORT, () => {
	console.log(`${process.env.MESSAGE} ${process.env.PORT}`);
});
