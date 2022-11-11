import { useCallback, useContext, useEffect, useState } from 'react'
import UserContext from '../context/userContext'

const USER_STATUS = {
  UNDEFINED: 0,
  LOADING: 1,
  OK: 2,
  NULL: 3,
}

const ERRORS = {
  NAME_REQUIRED: 'El nombre debe tener por lo menos dos caracteres',
  EMAIL_REQUIRED: 'Por favor, introduzca una dirección de correo electrónico valida',
  EMAIL_DUPLICATE: 'Ya existe una cuenta con esta direccion de correo electronico',
  PASSWORD_REQUIRED: 'La contraseña debe tener minimo 6 digitos',
  CONFIRM_PASSWORD_REQUIRED: 'Por favor, confirma la contraseña',
  INVALID_CONFIRMED_PASSWORD: 'Las contraseñas no coinciden',
}

const useUser = () => {
  const [userStatusCode, setUserStatusCode] = useState(USER_STATUS.UNDEFINED)
  const { user, setUser } = useContext(UserContext)

  const createUserWithEmail = useCallback(
    async (data) => {
      setUserStatusCode(USER_STATUS.LOADING)
      let error
      if (!data.confirmPassword) error = ERRORS.CONFIRM_PASSWORD_REQUIRED
      if (data.password !== data.confirmPassword) error = ERRORS.INVALID_CONFIRMED_PASSWORD
      if (data.password.length < 4) error = ERRORS.PASSWORD_REQUIRED
      if (!data.email) error = ERRORS.EMAIL_REQUIRED
      if (data.name.length < 2) error = ERRORS.NAME_REQUIRED

      if (!error) {
        const newUser = {
          displayName: `${data.name} ${data.lastName && data.lastName}`,
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
          if (response.status === 400 && result.error.code === 11000) throw new Error(ERRORS.EMAIL_DUPLICATE)
          if (response.status === 400) throw new Error(result)
          if (response.status === 201) setUser(result)
          setUserStatusCode(USER_STATUS.OK)
        } catch (e) {
          setUserStatusCode(USER_STATUS.UNDEFINED)
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
  }
}

export default useUser
