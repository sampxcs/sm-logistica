import connectMongo from '../../../../utils/connectMongo'
import Order from '../../../../models/orderSchema'

export default async function deleteOrderById(req, res) {
  const { id } = req.query
  try {
    await connectMongo()
    const order = await Order.findByIdAndDelete(id)
    order ? res.status(204).end() : res.status(404).json({ error: 'not found' })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}
