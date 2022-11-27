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
  const [orderStatusCode, setOrderStatusCode] = useState(CREATE_ORDER_STATUS.UNDEFINED)
  const user = useSelector((state) => state.user)
  const userStatusCode = useSelector((state) => state.userStatusCode)
  const dispatch = useDispatch()
  const [updateUser, setUpdateUser] = useState()

  // init user
  useEffect(() => {
    dispatch(setUserStatusCode(USER_STATUS.LOADING))
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      dispatch(setUser(loggedUser))
      dispatch(setUserStatusCode(USER_STATUS.OK))
    } else {
      dispatch(setUserStatusCode(USER_STATUS.NULL))
    }
  }, [dispatch])

  // update user
  useEffect(() => {
    if (updateUser) {
      dispatch(setUserStatusCode(USER_STATUS.LOADING))
      getUser(updateUser.userId)
        .then((user) => {
          window.localStorage.setItem('loggedUser', JSON.stringify(user))
          setUser(user)
          dispatch(setUserStatusCode(USER_STATUS.OK))
        })
        .catch((error) => {
          console.log(error)
          dispatch(setUserStatusCode(USER_STATUS.NULL))
        })
    }
  }, [updateUser, dispatch])

  /* ---------------------- USER --------------------------- */

  // CREATE USER WITH EMAIL AND PASSWORD

  const createUserWithEmail = useCallback(
    (data) => {
      dispatch(setUserStatusCode(USER_STATUS.LOADING))
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
          dispatch(setUserStatusCode(USER_STATUS.OK))
        })
        .catch((error) => {
          dispatch(setUserStatusCode(USER_STATUS.NULL))
          console.log({ error })
          throw new Error(error.message)
        })
    },
    [dispatch]
  )

  // UPDATE PROFILE

  const updateProfile = useCallback(() => {
    dispatch(setUserStatusCode(USER_STATUS.LOADING))
    setTimeout(() => dispatch(setUserStatusCode(USER_STATUS.OK)), 3000)
  }, [dispatch])

  // SIGN IN

  const signIn = useCallback(
    async (data) => {
      dispatch(setUserStatusCode(USER_STATUS.LOADING))
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
          if (response.status === 401) throw new Error(result.message)
          if (response.status === 200) {
            setUpdateUser({ userId: result.id, date: new Date() })
            dispatch(setUserStatusCode(USER_STATUS.OK))
          }
        } catch (e) {
          dispatch(setUserStatusCode(USER_STATUS.NULL))
          console.error(e)
          throw new Error(e.message)
        }
      } else {
        dispatch(setUserStatusCode(USER_STATUS.NULL))
        throw new Error(error)
      }
    },
    [dispatch]
  )

  // SIGN OUT

  const signOut = useCallback(() => {
    dispatch(setUserStatusCode(USER_STATUS.NULL))
    window.localStorage.removeItem('loggedUser')
    router.reload()
  }, [router, dispatch])

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
