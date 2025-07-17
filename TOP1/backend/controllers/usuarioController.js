const db = require ('../db/conexao');

const criarUsuario = (req, res) =>{

    const {nome, email, senha} = req.body;

    if (!nome || !email || !senha){

        return res.status(400).json({erro: 'Todos os campos sao obrigatorios.'});

    }

    const query = 'insert into criarusuario (nome, email, senha) values (?, ?, ?)';
    db.query(query, [nome, email, senha], (err, result)=>{

        if (err){

            console.error(err);
            return res.status(500).json({erro: 'Erro ao inserir usuário'});

        }

        res.status(201).json({mensagem: 'Usuario criado com sucesso!', id: result.insertId})

    });
};

module.exports = {criarUsuario};