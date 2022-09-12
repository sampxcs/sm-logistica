import Head from 'next/head'
import Form from '../../components/Form'
import Container from '../../components/Container'
import Nav from '../../components/Nav'

export default function SignUp() {
  return (
    <div>
      <Head>
        <title>Sign Up &middot; SM Logística</title>
      </Head>
      <Nav />
      <Container>
        <Form />
      </Container>
    </div>
  )
}
