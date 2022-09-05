import Head from 'next/head'
import Link from 'next/link'

export default function AreaClientes() {
  return (
    <div>
      <Head>
        <title>Login &middot; SM Logística</title>
      </Head>
      <h1>Login</h1>
      <Link href="/">
        <a>back home</a>
      </Link>
    </div>
  )
}

AreaClientes.getInitialProps = () => {
  return {}
}
