import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('cadastrarUsuarios.db');

export const initDB = () => {
  try {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL
      );
    `);
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  }
};

export const inserirUsuario = (nome, email, senha) => {
  try {
    const result = db.runSync(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?);',
      [nome, email, senha]
    );
    return { success: true, insertId: result.lastInsertRowId };
  } catch (error) {
    console.error('Erro ao inserir usuário:', error);
    return { success: false, error };
  }
};

export const buscarUsuarios = () => {
  try {
    const usuarios = db.getAllSync('SELECT * FROM usuarios;');
    return usuarios;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return [];
  }
};

export const verificarLogin = (email, senha) => {
  try {
    const usuario = db.getFirstSync(
      'SELECT * FROM usuarios WHERE email = ? AND senha = ?;',
      [email, senha]
    );
    
    if (usuario) {
      return { success: true, usuario };
    } else {
      return { success: false, message: 'Email ou senha incorretos!' };
    }
  } catch (error) {
    console.error('Erro ao verificar login:', error);
    return { success: false, message: 'Erro interno do sistema' };
  }
};

export const verificarEmailExiste = (email) => {
  try {
    const usuario = db.getFirstSync(
      'SELECT id FROM usuarios WHERE email = ?;',
      [email]
    );
    
    return usuario ? true : false;
  } catch (error) {
    console.error('Erro ao verificar email:', error);
    return false;
  }
};

// Novas funções para atualizar dados do usuário
export const atualizarUsuario = (id, nome, email) => {
  try {
    const result = db.runSync(
      'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?;',
      [nome, email, id]
    );
    return { success: true, rowsAffected: result.changes };
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    return { success: false, error };
  }
};

// Substitua a função atualizarSenha existente no seu db.js por esta:

export const atualizarSenha = (id, senhaAtual, novaSenha) => {
  try {
    // Primeiro verificar se a senha atual está correta
    const usuario = db.getFirstSync(
      'SELECT senha FROM usuarios WHERE id = ?;',
      [id]
    );
    
    if (!usuario) {
      return { success: false, error: 'Usuário não encontrado!' };
    }
    
    // Verificar se a senha atual está correta
    if (usuario.senha !== senhaAtual) {
      return { success: false, error: 'Senha atual incorreta!' };
    }
    
    // Se chegou até aqui, a senha atual está correta, pode atualizar
    const result = db.runSync(
      'UPDATE usuarios SET senha = ? WHERE id = ?;',
      [novaSenha, id]
    );
    
    return { success: true, rowsAffected: result.changes };
  } catch (error) {
    console.error('Erro ao atualizar senha:', error);
    return { success: false, error: 'Erro interno do sistema' };
  }
};
export const buscarUsuarioPorId = (id) => {
  try {
    const usuario = db.getFirstSync(
      'SELECT * FROM usuarios WHERE id = ?;',
      [id]
    );
    return usuario;
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error);
    return null;
  }
};