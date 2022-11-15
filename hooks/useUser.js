import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useState } from 'react'
import UserContext from '../context/userContext'
import { ERRORS, USER_STATUS, ORDER_STATUS, CREATE_ORDER_STATUS } from '../utils/dictionary'

const useUser = () => {
  const router = useRouter()
  const [userStatusCode, setUserStatusCode] = useState(USER_STATUS.UNDEFINED)
  const [orderStatusCode, setOrderStatusCode] = useState(CREATE_ORDER_STATUS.UNDEFINED)
  const { user, setUser } = useContext(UserContext)
  const [updateUser, setUpdateUser] = useState()

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

  useEffect(() => {
    if (updateUser) {
      console.log(1)
      const endpoint = `/api/users/get/${updateUser.userId}`
      const options = { method: 'GET' }
      console.log(2)
      const fetchUser = async () => {
        console.log(3)
        const response = await fetch(endpoint, options)
        console.log(response)
        const user = await response.json()
        console.log(user)
        return user
      }

      fetchUser()
        .then((user) => {
          console.log('user en then: ', user)
          window.localStorage.setItem('loggedUser', JSON.stringify(user))
          setUser(user)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }, [updateUser, setUser])

  /* ---------------------- USER --------------------------- */

  // CREATE USER WITH EMAIL AND PASSWORD

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

  // UPDATE PROFILE

  const updateProfile = useCallback(() => {
    setUserStatusCode(USER_STATUS.LOADING)
    setTimeout(() => setUserStatusCode(USER_STATUS.OK), 3000)
  }, [])

  // SIGN IN

  const signIn = useCallback(async (data) => {
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
          setUpdateUser({ userId: result.id, date: new Date() })
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
  }, [])

  // SIGN OUT

  const signOut = useCallback(() => {
    setUserStatusCode(USER_STATUS.NULL)
    window.localStorage.removeItem('loggedUser')
    window.location.reload()
  }, [])

  /* ---------------------- ORDER --------------------------- */

  // CREATE ORDER

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
        amount,
        cant,
        weight,
        description,
      } = data

      if (!amount) error = ERRORS.AMOUNT_REQUIRED
      if (!transport) error = ERRORS.TRANSPORT_REQUIRED
      if (!streetHeight) error = ERRORS.STREET_HEIGHT_REQUIRED
      if (!street) error = ERRORS.STREET_REQUIRED
      if (!location) error = ERRORS.LOCATION_REQUIRED
      if (!province) error = ERRORS.PROVINCE_REQUIRED
      if (!cp) error = ERRORS.CP_REQUIRED
      if (!email) error = ERRORS.EMAIL_REQUIRED
      if (!tel) error = ERRORS.TEL_REQUIRED
      // if (!cuit) error = ERRORS.INVALID_CUIT
      if (!document) error = ERRORS.DOCUMENT_REQUIRED
      if (name.length < 2) error = ERRORS.NAME_REQUIRED

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
          amount,
          cant,
          weight,
          description,
          date: new Date().toLocaleDateString(),
          status: ORDER_STATUS.PENDING,
          traking: '',
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
            setOrderStatusCode(CREATE_ORDER_STATUS.OK)
          }
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

  // DELETE ORDER

  const deleteOrder = useCallback(async (data) => {
    console.log(data)
    const endpoint = `/api/orders/delete`
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    try {
      const response = await fetch(endpoint, options)
      if (response.status === 204) {
        setUpdateUser({ userId: data.user, date: new Date() })
      }
    } catch (e) {
      console.log({ e })
    }
  }, [])

  /* -------------------------------------------------------- */

  return {
    user,
    userStatusCode,
    orderStatusCode,
    createUserWithEmail,
    updateProfile,
    signIn,
    signOut,
    createOrder,
    deleteOrder,
  }
}

export default useUser
