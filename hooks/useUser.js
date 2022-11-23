import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/features/users/userSlice'
import { setUserStatusCode } from '../store/features/users/userStatusCodeSlice'

import { getUser } from '../services/getUser'
import { postUser } from '../services/postUser'
import { postOrder } from '../services/postOrder'

import { ERRORS, USER_STATUS, ORDER_STATUS, CREATE_ORDER_STATUS } from '../utils/dictionary'

const useUser = () => {
  const router = useRouter()
  // const [userStatusCode, setUserStatusCode] = useState(USER_STATUS.UNDEFINED)
  const [orderStatusCode, setOrderStatusCode] = useState(CREATE_ORDER_STATUS.UNDEFINED)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [updateUser, setUpdateUser] = useState()

  // init user
  useEffect(() => {
    setUserStatusCode(USER_STATUS.LOADING)
    console.log('LOADING')
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      dispatch(setUser(loggedUser))
      dispatch(setUserStatusCode(USER_STATUS.OK))
      console.log('OK')
    } else {
      dispatch(setUserStatusCode(USER_STATUS.NULL))
      console.log('NULL')
    }
  }, [dispatch])

  // update user
  useEffect(() => {
    if (updateUser) {
      getUser(updateUser.userId)
        .then((user) => {
          window.localStorage.setItem('loggedUser', JSON.stringify(user))
          setUser(user)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [updateUser])

  /* ---------------------- USER --------------------------- */

  // CREATE USER WITH EMAIL AND PASSWORD

  const createUserWithEmail = useCallback((data) => {
    setUserStatusCode(USER_STATUS.LOADING)
    const { password, email, company, name, lastName, role } = data

    const newUser = {
      displayName: `${name} ${lastName && lastName}`.trim(),
      company,
      role,
      email,
      password,
    }

    postUser(newUser)
      .then((user) => {
        setUser(user)
        setUserStatusCode(USER_STATUS.OK)
      })
      .catch((error) => {
        setUserStatusCode(USER_STATUS.NULL)
        console.log({ error })
        throw new Error(error.message)
      })
  }, [])

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
        console.error(e)
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
    router.reload()
  }, [router])

  /* ---------------------- ORDER --------------------------- */

  // CREATE ORDER

  const createOrder = useCallback((data) => {
    setOrderStatusCode(CREATE_ORDER_STATUS.LOADING)
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

    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`

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
      date: `${date.toLocaleDateString()} ${hours}:${minutes} hs`,
      status: ORDER_STATUS.PENDING,
      traking: '',
    }

    postOrder(newOrder)
      .then((order) => {
        console.log(order)
        /* ----------------------------------------------------------- */
        /* FALTA ACTUALIZAR EL STATE DE LAS ORDENES CON LA NUEVA ORDEN */
        /* ----------------------------------------------------------- */

        return order
      })
      .catch((error) => {
        setOrderStatusCode(CREATE_ORDER_STATUS.NULL)
        throw new Error(error.message)
      })
  }, [])

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
    // userStatusCode,
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
