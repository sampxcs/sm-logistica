import Head from 'next/head'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { useEffect, useState } from 'react'

import Container from '../../components/Container'
import Spinner from '../../components/Spinner'
import { useRouter } from 'next/router'

export default function AreaClientes() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  console.log(user)

  useEffect(() => {
    !user && router.replace('/inicia-sesion')
  }, [user, router])

  if (!user) return (
    <>
      <Head>
        <title>Cargando...</title>
      </Head>
      <Container><Spinner /></Container>
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