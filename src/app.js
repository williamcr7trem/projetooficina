import express from 'express';
import dotenv from 'dotenv';

import sequelize from './config/database.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import authRoutes from './routes/authRoutes.js';
import livroRoutes from './routes/livroRoutes.js';
import movimentacaoRoutes from './routes/movimentacaoRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(movimentacaoRoutes);
app.use(usuarioRoutes);
app.use(authRoutes);
app.use(livroRoutes);

sequelize
    .authenticate()
    .then(() => {
        console.log('Conectado ao banco de dados');
    })
    .catch((err) => {
        console.error('Erro ao conectar:', err);
    });

sequelize.sync();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
