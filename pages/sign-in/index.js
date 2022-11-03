import Head from 'next/head'
import Form from '../../components/Form'
import Container from '../../components/Container'

export default function SignIn() {
  return (
    <div>
      <Head>
        <title>Sign In &middot; SM Logística</title>
      </Head>
      <Container>
        <Form />
      </Container>
    </div>
  )
}
