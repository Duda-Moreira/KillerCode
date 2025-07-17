const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Carrega variáveis do .env

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conexão com banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'sua_base',
});

// Teste de conexão
db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
  } else {
    console.log('Conectado ao MySQL com sucesso!');
  }
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do backend está rodando 🚀');
});

// Rota de cadastro de usuário
app.post('/usuario', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(query, [nome, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao inserir usuário:', err);
      return res.status(500).json({ erro: 'Erro no servidor.' });
    }

    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
