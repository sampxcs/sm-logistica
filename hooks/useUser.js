import { useCallback, useContext, useEffect, useState } from 'react'
import UserContext from '../context/userContext'
import { ERRORS, USER_STATUS } from '../utils/dictionary'

const useUser = () => {
  const [userStatusCode, setUserStatusCode] = useState(USER_STATUS.UNDEFINED)
  const { user, setUser } = useContext(UserContext)

  const createUserWithEmail = useCallback(
    async (data) => {
      setUserStatusCode(USER_STATUS.LOADING)
      let error

      if (!data.checkbox) error = ERRORS.CHECK_BOX_REQUIRED
      if (!data.confirmPassword) error = ERRORS.CONFIRM_PASSWORD_REQUIRED
      if (data.password !== data.confirmPassword) error = ERRORS.INVALID_CONFIRMED_PASSWORD
      if (data.password.length < 4) error = ERRORS.PASSWORD_REQUIRED
      if (!data.email) error = ERRORS.EMAIL_REQUIRED
      if (data.name.length < 2) error = ERRORS.NAME_REQUIRED

      if (!error) {
        const newUser = {
          displayName: `${data.name} ${data.lastName && data.lastName}`,
          company: data.company,
          role: data.role,
          email: data.email,
          password: data.password,
        }

        const endpoint = '/api/users/post'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        }
        try {
          const response = await fetch(endpoint, options)
          const result = await response.json()
          console.log(result)
          if (response.status === 400 && result.error.code === 11000) throw new Error(ERRORS.EMAIL_DUPLICATE)
          if (response.status === 400) throw new Error(result.error.message)
          if (response.status === 201) setUser(result)
          setUserStatusCode(USER_STATUS.OK)
        } catch (e) {
          setUserStatusCode(USER_STATUS.UNDEFINED)
          console.log({ e })
          throw new Error(e.message)
        }
      } else {
        setUserStatusCode(USER_STATUS.UNDEFINED)
        throw new Error(error)
      }
    },
    [setUser]
  )

  const signIn = useCallback(
    async (data) => {
      setUserStatusCode(USER_STATUS.LOADING)
      let error

      if (!data.password) error = ERRORS.PASSWORD_REQUIRED
      if (!data.email) error = ERRORS.EMAIL_REQUIRED

      if (!error) {
        const user = {
          email: data.email,
          password: data.password,
        }

        const endpoint = '/api/users/login'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        }

        try {
          const response = await fetch(endpoint, options)
          const result = await response.json()
          console.log(result)
          if (response.status === 401) throw new Error(result.message)
          if (response.status === 200) setUser(result)
          setUserStatusCode(USER_STATUS.OK)
        } catch (e) {
          setUserStatusCode(USER_STATUS.UNDEFINED)
          console.log({ e })
          throw new Error(e.message)
        }
      } else {
        setUserStatusCode(USER_STATUS.UNDEFINED)
        throw new Error(error)
      }
    },
    [setUser]
  )

  return {
    user,
    userStatusCode,
    createUserWithEmail,
    signIn,
  }
}

export default useUser
