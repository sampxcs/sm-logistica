import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import Head from 'next/head'

import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Spinner from '../../components/Spinner'
import Container from '../../components/Container'

import useUser from '../../hooks/useUser'

import { USER_STATUS } from '../../utils/dictionary'

export default function ClientsArea() {
  const router = useRouter()
  const { user } = useUser()
  const userStatusCode = useSelector((state) => state.userStatusCode)

  useEffect(() => {
    if (userStatusCode === USER_STATUS.NULL) {
      router.replace('/sign-in')
      console.log('de vuelta')
    }
  }, [userStatusCode, router])

  if (userStatusCode === USER_STATUS.OK)
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
}
