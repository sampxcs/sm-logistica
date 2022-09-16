import jwt from 'jsonwebtoken'
import connectMongo from '../../../../utils/connectMongo'
import bcrypt from 'bcrypt'
import User from '../../../../models/userSchema'

export default async function login(req, res) {
    try {
        await connectMongo()
        const { email: requestEmail, password: requestPassword } = req.body
        const user = await User.findOne({ email: requestEmail })

        console.log(req.body)
        console.log('-----------------------')
        console.log(requestEmail)
        console.log(requestPassword)
        console.log(user)
    
        if (user) {
          const passwordCurrent = await bcrypt.compare(requestPassword, user.password)
          console.log(passwordCurrent)
          if (passwordCurrent) {
            const { displayName, email, _id } = user
            const userForToken = {
              displayName,
              _id
            }
            const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 })
            return res.send({
              displayName,
              email,
              token
            })
          }
          return res.status(401).json({
            error: 'invalid password'
          })
        }
        return res.status(401).json({
          error: 'invalid user email'
        })

    } catch (error) {
        console.log(error);
    }
    
  }