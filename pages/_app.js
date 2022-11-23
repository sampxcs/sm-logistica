import './globals.css'

import { Provider } from 'react-redux'
import { store } from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <div id="modal-root"></div>
    </Provider>
  )
}

export default MyApp
