import express from 'express';
import {
    cadastrar,
    listar,
    deletar,
} from '../controllers/livroController.js';

import auth from '../middlewares/auth.js';
import permitir from '../middlewares/checkRole.js';

const router = express.Router();

router.post('/livros', auth, cadastrar);
router.get('/livros', auth, listar);
router.delete(
    '/livros/:id',
    auth,
    permitir('administrador'),
    deletar
);

export default router;
