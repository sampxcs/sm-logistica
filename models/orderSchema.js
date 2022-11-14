import { Schema, model, models } from 'mongoose'

const orderSchema = new Schema({
  orderId: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: String },
  name: { type: String },
  document: { type: String },
  cuit: { type: String },
  tel: { type: String },
  email: { type: String },
  type: { type: String },
  cp: { type: String },
  province: { type: String },
  location: { type: String },
  street: { type: String },
  streetHeight: { type: String },
  flat: { type: String },
  department: { type: String },
  specification: { type: String },
  transport: { type: String },
  amount: { type: String },
  cant: { type: String },
  weight: { type: String },
  description: { type: String },
  status: { type: String },
  traking: { type: String },
})

orderSchema.set('toJSON', {
  transform: (document, returnedObjet) => {
    returnedObjet.id = returnedObjet._id
    delete returnedObjet._id
    delete returnedObjet.__v
  },
})

const Order = models.Order || model('Order', orderSchema)

export default Order
