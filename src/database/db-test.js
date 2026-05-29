const sequelize = require('./connection')

const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate()

    console.log('✅ Database connected successfully')
  } catch (error) {
    console.error('❌ Database connection failed')
    console.error(error.message)

    process.exit(1)
  }
}

module.exports = testDatabaseConnection