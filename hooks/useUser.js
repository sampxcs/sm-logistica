import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useState } from 'react'
import UserContext from '../context/userContext'
import { ERRORS, USER_STATUS, ORDER_STATUS, CREATE_ORDER_STATUS } from '../utils/dictionary'

const useUser = () => {
  const router = useRouter()
  const [userStatusCode, setUserStatusCode] = useState(USER_STATUS.UNDEFINED)
  const [orderStatusCode, setOrderStatusCode] = useState(CREATE_ORDER_STATUS.UNDEFINED)
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    setUserStatusCode(USER_STATUS.LOADING)
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      setUserStatusCode(USER_STATUS.OK)
      setUser(loggedUser)
    } else {
      setUserStatusCode(USER_STATUS.NULL)
    }
  }, [setUser])

  const createUserWithEmail = useCallback(
    async (data) => {
      setUserStatusCode(USER_STATUS.LOADING)
      const { checkbox, confirmPassword, password, email, company, name, lastName, role } = data
      let error

      if (!checkbox) error = ERRORS.CHECK_BOX_REQUIRED
      if (!confirmPassword) error = ERRORS.CONFIRM_PASSWORD_REQUIRED
      if (password !== confirmPassword) error = ERRORS.INVALID_CONFIRMED_PASSWORD
      if (password.length < 6) error = ERRORS.PASSWORD_REQUIRED
      if (!email) error = ERRORS.EMAIL_REQUIRED
      if (name.length < 2) error = ERRORS.NAME_REQUIRED

      if (!error) {
        const newUser = {
          displayName: `${name} ${lastName && lastName}`.trim(),
          company,
          role,
          email,
          password,
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
          if (response.status === 201) router.replace('/sign-in')
          setUserStatusCode(USER_STATUS.OK)
        } catch (e) {
          setUserStatusCode(USER_STATUS.NULL)
          console.log({ e })
          throw new Error(e.message)
        }
      } else {
        setUserStatusCode(USER_STATUS.NULL)
        throw new Error(error)
      }
    },
    [router]
  )

  const signIn = useCallback(
    async (data) => {
      setUserStatusCode(USER_STATUS.LOADING)
      const { password, email } = data
      let error

      if (!password) error = ERRORS.PASSWORD_REQUIRED
      if (!email) error = ERRORS.EMAIL_REQUIRED

      if (!error) {
        const user = {
          email: email,
          password: password,
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
          if (response.status === 200) {
            setUser(result)
            window.localStorage.setItem('loggedUser', JSON.stringify(result))
          }
          setUserStatusCode(USER_STATUS.OK)
        } catch (e) {
          setUserStatusCode(USER_STATUS.NULL)
          console.log({ e })
          throw new Error(e.message)
        }
      } else {
        setUserStatusCode(USER_STATUS.NULL)
        throw new Error(error)
      }
    },
    [setUser]
  )

  const signOut = useCallback(() => {
    setUserStatusCode(USER_STATUS.NULL)
    window.localStorage.removeItem('loggedUser')
    window.location.reload()
  }, [])

  const createOrder = useCallback(
    async (data) => {
      setOrderStatusCode(CREATE_ORDER_STATUS.LOADING)
      let error
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
      } = data

      if (!error) {
        const newOrder = {
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
          date: new Date(),
          status: ORDER_STATUS.PENDING,
        }

        const endpoint = '/api/orders/post'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrder),
        }
        try {
          const response = await fetch(endpoint, options)
          const result = await response.json()
          console.log(result)
          if (response.status === 400 && result.error.code === 11000) throw new Error(ERRORS.EMAIL_DUPLICATE)
          if (response.status === 400) throw new Error(result.error.message)
          if (response.status === 201) {
            setUser(result)
            window.localStorage.setItem('loggedUser', JSON.stringify(result))
          }
          setOrderStatusCode(CREATE_ORDER_STATUS.OK)
        } catch (e) {
          setOrderStatusCode(CREATE_ORDER_STATUS.NULL)
          console.log({ e })
          throw new Error(e.message)
        }
      } else {
        setOrderStatusCode(CREATE_ORDER_STATUS.NULL)
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
    signOut,
    createOrder,
  }
}

export default useUser
