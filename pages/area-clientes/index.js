import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import Container from '../../components/Container'
import Spinner from '../../components/Spinner'
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
