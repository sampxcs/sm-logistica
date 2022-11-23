import connectMongo from '../../../../services/connectMongo'
import Order from '../../../../models/orderSchema'

export default async function getOrders(req, res) {
  try {
    await connectMongo()
    const orders = await Order.find({}).populate('user')
    res.json(orders)
  } catch (error) {
    console.log(error.name)
    res.json({ error: error.message })
  }
}
