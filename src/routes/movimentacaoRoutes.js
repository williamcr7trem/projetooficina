const express = require('express');
const { cadastrar } = require('../controllers/movimentacaoController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post(
    '/movimentacoes',
    auth,
    cadastrar
);

module.exports = router;