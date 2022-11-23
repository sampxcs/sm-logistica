import connectMongo from '../../../../services/connectMongo'
import User from '../../../../models/userSchema'

export default async function deleteUserById(req, res) {
  const { id } = req.query
  try {
    await connectMongo()
    const user = await User.findByIdAndDelete(id)
    user ? res.status(204).end() : res.status(404).json({ error: 'not found' })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}
