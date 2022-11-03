import Head from 'next/head'
import Form from '../../components/Form'
import Container from '../../components/Container'

export default function SignUp() {
  return (
    <div>
      <Head>
        <title>Sign Up &middot; SM Logística</title>
      </Head>
      <Container>
        <Form />
      </Container>
    </div>
  )
}
