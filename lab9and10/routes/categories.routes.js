const controller = require("../controllers/category.controller");

module.exports = function(app) {
  app.get("/categories", controller.getAll);
  app.post("/categories", controller.add);
};