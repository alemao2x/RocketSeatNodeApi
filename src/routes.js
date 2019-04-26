const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.post("/products/", ProductController.store);
routes.delete("/products/:id", ProductController.destroy);
routes.get("/products", ProductController.index);
routes.put("/products/:id", ProductController.update);
routes.get("/products/:id", ProductController.show);

module.exports = routes;
