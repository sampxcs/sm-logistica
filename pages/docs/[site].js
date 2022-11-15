import Head from 'next/head'

import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Main from '../../components/Main'

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documentacion &middot; SM Logística</title>
      </Head>
      <div>
        <Header />
        <Nav />
        <Main />
      </div>
    </>
  )
}
