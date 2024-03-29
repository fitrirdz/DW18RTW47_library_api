const express = require("express");
const app = express();
const port = 5001;

require("dotenv").config();

require("express-group-routes");

const router = require("./src/routes/router");

app.use(express.json());

app.use("/api/v1/", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
