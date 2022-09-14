import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Main from '../../components/Main'

export default function AreaClientes() {
  const router = useRouter()
  const user = undefined

  // !user && router.replace('/sign-in')

  return (
    <>
      <Head>
        <title>Area Clientes &middot; SM Logística</title>
      </Head>
      <div>
        <Header />
        <Nav />
        <Main />
      </div>
    </>
  )
}
