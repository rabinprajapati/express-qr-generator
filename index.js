const express = require("express");
const app = express();

const indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.static("public"));

app.use("/", indexRoutes);

app.listen(3000, () => {
  console.log("application running");
});
