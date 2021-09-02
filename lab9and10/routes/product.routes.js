const controller = require("../controllers/product.controller");

module.exports = function(app) {
  app.get("/products", controller.getAll);
  app.post("/products", controller.add);
  app.put("/products", controller.update);
  app.delete("/products", controller.delete);
};
