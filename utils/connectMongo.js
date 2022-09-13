import mongoose from 'mongoose'

const { MONGO_DB_URI } = process.env
const connectionString = MONGO_DB_URI

// conection to MongoDB
const connectMongo = async () => {
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log('Database conected')
    })
    .catch((e) => {
      console.error(e)
    })
}

export default connectMongo
