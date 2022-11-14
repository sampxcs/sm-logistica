import connectMongo from '../../../../utils/connectMongo'
import Order from '../../../../models/orderSchema'
import User from '../../../../models/userSchema'

export default async function getUserById(req, res) {
  const { id } = req.query
  console.log(id)
  try {
    await connectMongo()
    const user = await User.findById(id).populate('orders')
    console.log(user)
    user ? res.json(user) : res.status(404).json({ error: 'not found' })
  } catch (error) {
    console.log(error.name)
    res.json({ error: error.message })
  }
}
