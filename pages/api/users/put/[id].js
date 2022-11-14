import connectMongo from '../../../../utils/connectMongo'
import User from '../../../../models/userSchema'

export default async function EditUserById(req, res) {
  try {
    await connectMongo()

    const { id } = req.query
    const user = req.body
    const { displayName, email } = user

    if (!Object.entries(user).length) {
      return response.status(400).json({
        error: 'person content in missing',
      })
    }

    const newUserInfo = {
      displayName,
      email,
    }

    const saveUser = await User.findByIdAndUpdate(id, newUserInfo, { new: true })
    res.status(200).json(saveUser)
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message })
  }
}
