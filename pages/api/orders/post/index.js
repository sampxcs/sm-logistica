import connectMongo from '../../../../utils/connectMongo'
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
      transportName,
      amount,
      cant,
      weight,
      description,
      date,
      status,
    } = order

    const user = await User.findById(userId).populate('orders', {
      userId: 0,
    })

    // if (user.password.length < 6) throw new Error('La contraseña debe tener minimo 6 digitos')
    // if (user.displayName.length < 2) throw new Error('El nombre de usuario debe tener minimo 2 digitos')

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
      transportName,
      amount,
      cant,
      weight,
      description,
      date,
      status,
    })

    const saveOrder = await newOrder.save()
    user.orders = user.orders.concat(saveOrder)
    await user.save()

    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error })
  }
}
