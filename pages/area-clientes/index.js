import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function AreaClientes() {
  const router = useRouter()
  const user = undefined

  !user && router.replace('/login')
  return (
    <div>
      <Head>
        <title>Area Clientes &middot; SM Logística</title>
      </Head>
      <h1>Area Clientes</h1>
      <Link href="/">
        <a>back home</a>
      </Link>
    </div>
  )
}
