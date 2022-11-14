import connectMongo from '../../../../utils/connectMongo'
import Order from '../../../../models/orderSchema'

export default async function EditOrderById(req, res) {
  try {
    await connectMongo()

    const { id } = req.query
    const order = req.body
    // const { displayName, email } = user

    if (!Object.entries(order).length) {
      return response.status(400).json({
        error: 'person content in missing',
      })
    }

    const newOrderInfo = {
      displayName,
      email,
    }

    const saveOrder = await Order.findByIdAndUpdate(id, newOrderInfo, { new: true })
    res.status(200).json(saveOrder)
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message })
  }
}
