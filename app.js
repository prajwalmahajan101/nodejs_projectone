const http = require("http");
const path = require("path");

const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

const errorContorller = require("./controllers/error.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: "false" }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/", errorContorller.pageNotFound);

const server = http.createServer(app);

server.listen(3000);
