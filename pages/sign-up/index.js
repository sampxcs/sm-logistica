import Head from 'next/head'

import Form from '../../components/Form'
import Container from '../../components/Container'
import AnimationBackground from '../../components/AnimationBackground'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up &middot; SM Logística</title>
      </Head>
      <Container>
        <Form />
        <AnimationBackground />
      </Container>
    </>
  )
}
