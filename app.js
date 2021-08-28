const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routers/admin");
const shopRouter = require("./routers/shop");
const path = require("path");
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

app.use("/admin", adminRouter.routes);
app.use(shopRouter);

app.use((req, res, next) => {
  res
    .status(404)
    .render("pageNotFound", {
      pageTitle: "404 Error",
      errorMsg: "Page Not Found",
      path : ''
    });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
