import connectMongo from '../../../../utils/connectMongo'
import bcrypt from 'bcrypt'
import User from '../../../../models/userSchema'

export default async function createUser(req, res) {
  try {
    await connectMongo()
    const user = req.body
    const passwordHash = await bcrypt.hash(user.password, 10)

    const newUser = new User({
      displayName: user.displayName,
      email: user.email,
      password: passwordHash,
    })

    const saveUser = await newUser.save()
    res.status(201).json(saveUser)
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message })
  }
}
