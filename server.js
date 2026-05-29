require('dotenv').config()

const app = require('./src/app')
const testDatabaseConnection = require('./src/database/db-test')

const PORT = process.env.PORT || 3000

async function startServer() {
  await testDatabaseConnection()

  app.listen(PORT, () => {
    console.log(`🚀 NH HIS API running on port ${PORT}`)
  })
}

startServer()