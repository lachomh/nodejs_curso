const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuarioSignin,
  usuarioUpgrade,
  } = require("../controllers/usuarios");
const { deleteUsuario2 } = require("../models/usuarios");

const router = Router();

// localhost:3001/usuarios/
router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.put("/", usuariosPut);
router.delete("/", usuariosDelete);
router.post("/signin/", usuarioSignin);
router.post("/upgrade/", usuarioUpgrade);
module.exports = router;