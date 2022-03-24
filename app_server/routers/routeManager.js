const homeRouter = require("./homeRouter");

module.exports = function(app){
    app.use("/", homeRouter);
}
