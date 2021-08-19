const { request, response } = require("express");

const usuariosGet = (req = request, res = response) => {
  res.json({ msg: "Hola gente en GET" });
};

const usuariosPost = (req = request, res = response) => {
  const {npmbre,apellido,edad,email} = req.body;
  res.status(201).json({ msg: "Hola gente en  POST", npmbre});
};

const usuariosPut = (req = request, res = response) => {
  const id = req.params;
  res.status(400).json({ msg: "Hola gente en  desde PUT", id });
};

const usuariosDelete = (req = request, res = response) => {
  const data = req.query;
  res.status(500).json({ msg: "Hola gente en  DELETE", data});
};

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosDelete };