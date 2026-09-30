import express from 'express';
import movimentacaoController from '../controllers/movimentacaoController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post(
    '/movimentacoes',
    auth,
    movimentacaoController.cadastrar
);

export default router;
