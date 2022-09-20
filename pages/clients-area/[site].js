import Head from 'next/head'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { useEffect, useState } from 'react'

import Container from '../../components/Container'
import Spinner from '../../components/Spinner'
import { useRouter } from 'next/router'

export default function ClientsArea() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  /*  useEffect(() => {
    !user && router.replace('/sign-in')
  }, [user, router]) */

  setTimeout(() => {
    setUser('123')
  }, 1000)

  if (!user)
    return (
      <>
        <Head>
          <title>Cargando...</title>
        </Head>
        <Container>
          <Spinner />
        </Container>
      </>
    )

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
