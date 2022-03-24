const fs = require("fs");
const express = require("express");
const path = require("path");
const { log } = require("util");
const app = express();
const ejsLayouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./app_server/views"));
app.use(ejsLayouts);




// Public dosyasını herkese açma
app.use("/public", express.static(path.join(__dirname, "public")));



// Router ekleme yeri
require("./app_server/routers/routeManager")(app);



// Port dinleme yeri
app.listen(8001);
