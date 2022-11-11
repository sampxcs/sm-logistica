import './globals.css'

import { UserContextProvaider } from '../context/userContext'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvaider>
      <Component {...pageProps} />
    </UserContextProvaider>
  )
}

export default MyApp
