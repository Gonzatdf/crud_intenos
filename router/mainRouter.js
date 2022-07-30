const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");
//todos los productos
router.get("/", mainController.index);
//rutas que crean producto
router.get("/createProducts", mainController.create);
//procesa un producto
router.post("/", mainController.send);
//ruta que edita
router.get("/:id", mainController.id);
//ruta que obtiene un producto
router.get("/edit/:id", mainController.edit);

//ruta que edita un producto
router.put("/:id", mainController.update);

// ruta que elimina un producto

router.delete("/:id", mainController.delete);

module.exports = router;
