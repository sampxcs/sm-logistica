import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from '../../components/Container'
import Spinner from '../../components/Spinner'

export default function AreaClientes() {
  const router = useRouter()
  const user = undefined

  setTimeout(() => {
    !user && router.replace('/sign-in')
  }, 1000)

  return (
    <>
      <Head>
        <title>Area Clientes &middot; SM Logística</title>
      </Head>
      <Container>
        <Spinner />
      </Container>
    </>
  )
}
