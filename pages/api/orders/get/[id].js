import connectMongo from '../../../../services/connectMongo'
import Order from '../../../../models/orderSchema'

export default async function getOrderById(req, res) {
  const { id } = req.query
  try {
    await connectMongo()
    const order = await Order.findById(id)
    order ? res.json(order) : res.status(404).json({ error: 'not found' })
  } catch (error) {
    console.log(error.name)
    res.json({ error: error.message })
  }
}
