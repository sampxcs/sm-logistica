import jwt from 'jsonwebtoken'
import connectMongo from '../../../../services/connectMongo'
import bcrypt from 'bcrypt'
import User from '../../../../models/userSchema'

import { ERRORS } from '../../../../utils/dictionary'

export default async function login(req, res) {
  try {
    await connectMongo()
    const { email: requestEmail, password: requestPassword } = req.body
    const user = await User.findOne({ email: requestEmail })

    if (user) {
      const passwordCurrent = await bcrypt.compare(requestPassword, user.password)
      if (passwordCurrent) {
        const { displayName, email, company, role, orders, id } = user.toJSON()
        const userForToken = {
          displayName,
          id,
        }
        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 })
        return res.send({
          displayName,
          email,
          company,
          orders,
          role,
          id,
          token,
        })
      } else throw new Error(ERRORS.INVALID_PASSWORD)
    } else throw new Error(ERRORS.INVALID_EMAIL)
  } catch (error) {
    const message = error.message
    res.status(401).json({ message })
  }
}
