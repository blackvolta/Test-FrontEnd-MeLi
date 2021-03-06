const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const meliRouter = require("./routes/meliRouter.js");
//const ListRoute = require("./routes/list");
//const DetailRoute = require("./routes/detail");

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", meliRouter);

//APPLICATION EXPRESS ROUTES
//app.use("/api/items/list:query", ListRoute);
//app.use("/api/items/detail:id", DetailRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));
