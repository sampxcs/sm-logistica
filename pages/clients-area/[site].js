import Head from 'next/head'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { useEffect, useState } from 'react'

import { USER_STATUS } from '../../utils/dictionary'
import Container from '../../components/Container'
import Spinner from '../../components/Spinner'
import { useRouter } from 'next/router'
import useUser from '../../hooks/useUser'

export default function ClientsArea() {
  const router = useRouter()
  const { userStatusCode } = useUser()

  useEffect(() => {
    userStatusCode === USER_STATUS.NULL && router.replace('/sign-in')
  }, [userStatusCode, router])

  if (userStatusCode === USER_STATUS.LOADING)
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
}
