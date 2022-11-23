export const getUser = async (id) => {
  const endpoint = `/api/users/get/${id}`
  const options = { method: 'GET' }
  try {
    const response = await fetch(endpoint, options)
    const user = await response.json()
    return user
  } catch (error) {
    throw new Error(error)
  }
}
