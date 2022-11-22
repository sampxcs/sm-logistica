import './globals.css'

import { Provider } from 'react-redux'
import { UserContextProvaider } from '../context/userContext'
import { store } from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UserContextProvaider>
        <Component {...pageProps} />
        <div id="modal-root"></div>
      </UserContextProvaider>
    </Provider>
  )
}

export default MyApp
