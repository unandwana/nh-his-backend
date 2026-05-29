const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME_ADMIN,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',

    timezone: '+05:30',

    logging: process.env.NODE_ENV === 'development'
      ? console.log
      : false,

    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    define: {
      timestamps: true,
      underscored: true,
      paranoid: true
    }
  }
)

module.exports = sequelize