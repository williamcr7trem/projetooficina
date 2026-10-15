const express = require('express');
const {
    cadastrar,
    listar,
    deletar,
} = require('../controllers/livroController');

const auth = require('../middlewares/auth');
const permitir = require('../middlewares/checkRole');

const router = express.Router();

router.post('/livros', auth, cadastrar);
router.get('/livros', auth, listar);
router.delete(
    '/livros/:id',
    auth,
    permitir('administrador'),
    deletar
);

module.exports = router;