const express = require('express');
const path = require('path');
require('dotenv').config();

const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes');
const livroRoutes = require('./routes/livroRoutes');
const movimentacaoRoutes = require('./routes/movimentacaoRoutes');

const app = express();

app.use(express.json());
// Módulo 8: entrega os arquivos da pasta public (HTML e CSS)
app.use(express.static(path.join(__dirname, '..', 'public')));

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