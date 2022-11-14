import connectMongo from '../../../../utils/connectMongo'
import Order from '../../../../models/orderSchema'
import User from '../../../../models/userSchema'

export default async function deleteOrderById(req, res) {
  const { id, user: userId } = req.body
  try {
    await connectMongo()
    const order = await Order.findByIdAndDelete(id)

    if (order) {
      const user = await User.findById(userId)
      const indexOrder = user.orders.indexOf(id)
      user.orders.splice(indexOrder, 1)
      await user.save()
      res.status(204).end()
    } else {
      res.status(404).json({ error: 'not found' })
    }
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}
