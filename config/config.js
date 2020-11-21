module.exports = {
  production: {
    username: 'SEU_USUARIO_DO_BANCO_DE_DADOS',
    password: 'SUA_SENHA_DO_BANCO_DE_DADOS',
    database: 'NOME_DO_SEU_BANCO_DE_DADOS',
    host: 'URL_DO_SEU_BANCO_DE_DADOS.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
