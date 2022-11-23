export const postUser = async (newOrder) => {
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
    const order = await response.json()
    if (response.status === 400) throw new Error(order.error.message)
    if (response.status === 201) {
      return order
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
