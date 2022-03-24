const homeRoute = require("./homeRouter");





module.exports = function(app){
    app.use("/", homeRoute);

}