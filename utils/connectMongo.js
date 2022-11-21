import mongoose from 'mongoose'

const { MONGO_DB_URI } = process.env
const connectionString = MONGO_DB_URI
console.log(MONGO_DB_URI)
console.log('despues')

// conection to MongoDB
const connectMongo = async () => {
  await mongoose
    .connect(connectionString)
    .then(() => {
      console.log('Database conected')
    })
    .catch((e) => {
      console.log('Database NO conected')
      console.log(e)
      throw new Error(e)
    })
}

export default connectMongo
