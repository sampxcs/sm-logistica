import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  displayName: { type: String, required: [true, 'user name is required'] },
  company: { type: String },
  role: { type: String },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  admin: { type: Schema.Types.ObjectId, ref: 'User' },
  email: { type: String, required: [true, 'user email is require'], unique: true },
  password: { type: String, required: [true, 'password is required'], minLength: [6, 'La contraseña debe tener minimo 6 digitos'] },
  senderData: { type: Map, of: String },
})

userSchema.set('toJSON', {
  transform: (document, returnedObjet) => {
    returnedObjet.id = returnedObjet._id
    delete returnedObjet.password
    delete returnedObjet._id
    delete returnedObjet.__v
  },
})

const User = models.User || model('User', userSchema)

export default User
