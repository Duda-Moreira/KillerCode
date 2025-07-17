const express = require('express');
const router = express.Router();
const {criarUsuario} = require ('../controllers/usuarioController');

router.post('/', criarUsuario); // rota POST / usuarios

module.exports = router;