import connectMongo from '../../../../services/connectMongo'
import Order from '../../../../models/orderSchema'
import User from '../../../../models/userSchema'

export default async function createOrder(req, res) {
  try {
    await connectMongo()
    const order = req.body
    const {
      orderId,
      userId,
      name,
      document,
      cuit,
      tel,
      email,
      type,
      cp,
      province,
      location,
      street,
      streetHeight,
      flat,
      department,
      specification,
      transport,
      amount,
      cant,
      weight,
      description,
      date,
      status,
      traking,
    } = order

    const user = await User.findById(userId).populate('orders')

    const newOrder = new Order({
      user: user._id,
      orderId,
      name,
      document,
      cuit,
      tel,
      email,
      type,
      cp,
      province,
      location,
      street,
      streetHeight,
      flat,
      department,
      specification,
      transport,
      amount,
      cant,
      weight,
      description,
      date,
      status,
      traking,
    })

    const saveOrder = await newOrder.save()
    user.orders = user.orders.concat(saveOrder)
    await user.save()

    res.status(201).json(saveOrder)
  } catch (error) {
    res.status(400).json({ error })
  }
}
