const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routers/admin");
const shopRouter = require("./routers/shop");
const path = require("path");
const pageNotFoundController = require('./controllers/pageNotFound');
//const expressHbs = require("express-handlebars");

const app = express();

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
app.set('view engine','ejs');
//app.set("view engine", "hbs");
// app.set('view engine','pug');
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use(pageNotFoundController.pageNotFound);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
