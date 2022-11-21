import mongoose from 'mongoose'

console.log('antes de la variable de entorno de connect mongo')
console.log(process.env)
const { MONGO_DB_URI } = process.env
const connectionString = MONGO_DB_URI

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
