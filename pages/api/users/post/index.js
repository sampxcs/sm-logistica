import connectMongo from '../../../../services/connectMongo'
import bcrypt from 'bcrypt'
import User from '../../../../models/userSchema'

export default async function createUser(req, res) {
  try {
    await connectMongo()
    const user = req.body
    const passwordHash = await bcrypt.hash(user.password, 10)

    if (user.password.length < 6) throw new Error('La contraseña debe tener minimo 6 digitos')
    if (user.displayName.length < 2) throw new Error('El nombre de usuario debe tener minimo 2 digitos')

    const newUser = new User({
      displayName: user.displayName,
      company: user.company,
      role: user.role,
      email: user.email,
      password: passwordHash,
    })

    const saveUser = await newUser.save()
    res.status(201).json(saveUser)
  } catch (error) {
    res.status(400).json({ error })
  }
}
