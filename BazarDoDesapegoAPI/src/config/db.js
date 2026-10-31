const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log("estamos1 - Inicializando Sequelize");

// Cria a instância de conexão do Sequelize usando a URL do banco de dados
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging:false, // Mude para console.log se quiser ver as queries SQL no terminal
  define: {
    timestamps: false,  // Mantém desativado se gerenciar created_at manualmente
    underscored: true   // Mapeia camelCase do JS para snake_case do MySQL (ex: userId -> user_id)
  },
  pool: {
    max: 5,           // Número máximo de conexões na pool
    min: 0,           // Número mínimo de conexões na pool
    acquire: 30000,   // Tempo máximo (ms) tentando conectar antes de dar erro
    idle: 10000       // Tempo máximo (ms) que uma conexão pode ficar ociosa
  }
});

// Testa a conexão imediatamente ao iniciar o arquivo
sequelize.authenticate()
  .then(() => {
    console.log('🚀 Conexão com o MySQL/MariaDB via Sequelize foi bem-sucedida!');
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ao banco de dados com Sequelize:', err.message);
  });

  module.exports = sequelize;
