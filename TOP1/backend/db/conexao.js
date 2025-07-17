const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const conexao = mysql.createPool({
    host: 'localhost',     // ou IP do seu banco, ex: '192.168.0.105'
    user: '',   // seu usuário do MySQL
    password: '', // sua senha do MySQL
    database: 'mobile', // nome do banco de dados
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exporta a conexão para usar no seu servidor
module.exports = conexao;
