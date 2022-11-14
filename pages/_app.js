import './globals.css'

import { UserContextProvaider } from '../context/userContext'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvaider>
      <Component {...pageProps} />
      <div id='modal-root'></div>
    </UserContextProvaider>
  )
}

export default MyApp
