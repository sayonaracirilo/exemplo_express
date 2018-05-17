var express = require("express");
var path = require("path");
var logger = require("morgan");
const session = require("express-session");
const loginController = require("./controller/login");
const logoutController = require("./controller/logout");
const contatosController = require("./controller/contatos");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.cookieParser("saiot"));
app.use(session({ secret: "sayo", cookie: { maxAge: 60000 } }));
// app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home/index"));
app.post("/entrar", loginController);
app.get("/sair", logoutController);
app.get("/contatos", contatosController);
app.get("/about", (req, res) => {
  var users = [
    {
      /// name: faker.name.findName(),
      // email: faker.internet.email(),
      avatar: "http://placekitten.com/300/300"
    },
    {
      // name: faker.name.findName(),
      //  email: faker.internet.email(),
      avatar: "http://placekitten.com/400/300"
    },
    {
      //  name: faker.name.findName(),
      // email: faker.internet.email(),
      avatar: "http://placekitten.com/500/300"
    }
  ];

  res.render("home/about", { usuarios: users });
});

app.listen(3000, () => console.log("Servidor no ar."));
