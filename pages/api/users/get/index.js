import connectMongo from '../../../../utils/connectMongo'
import User from '../../../../models/userSchema'

export default async function getUsers(req, res) {
  try {
    await connectMongo()
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.log(error.name)
    res.json({ error: error.message })
  }
}
