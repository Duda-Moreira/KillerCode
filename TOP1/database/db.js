// database.js - Para Expo SQLite versão 11+
import * as SQLite from 'expo-sqlite';

// Nova sintaxe para expo-sqlite 11+
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
