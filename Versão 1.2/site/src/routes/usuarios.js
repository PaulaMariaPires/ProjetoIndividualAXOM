var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var pontuacoesController = require("../controllers/pontuacoesController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/registrarpontos", function (req, res) {
    usuarioController.registrarpontos(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/Pontuacao", function (req, res) {
    pontuacoesController.buscarUltimasPontucao(req, res);
});

module.exports = router;