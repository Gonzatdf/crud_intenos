const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const productListPath = path.resolve(__dirname, "../data/zapatillas.json");
const productList = JSON.parse(fs.readFileSync(productListPath, "utf8"));

const mainController = {
  index: (req, res) => res.render("index", { productos: productList }),

  create: (req, res) => res.render("createProducts"),

  send: (req, res) => {
    let producto = req.body;
    producto.id = uuidv4();
    productList.push(producto);
    fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));

    console.log("store a new product", producto);
    //todo: save product in file json
    res.redirect("/products");
  },
  edit: (req, res) => {
    let id= req.params.id;
    let buscar = productList.find(product =>product.id == id);
    res.render("editProduct", { find: buscar });
  },

  update: (req, res) => res.send("actualizar"),

  delete: (req, res) => res.send("eliminar"),

  id: (req, res) => res.send("este es el id: " + req.params.id),
};

module.exports = mainController;
