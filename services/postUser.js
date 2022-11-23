export const postUser = async (newUser) => {
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
    const user = await response.json()
    // if (response.status === 400 && user.error.code === 11000) throw new Error(user.error.message) "USER DUPLICATED"
    if (response.status === 400) throw new Error(result.error.message)
    if (response.status === 201) return user
  } catch (error) {
    throw new Error(error.message)
  }
}
