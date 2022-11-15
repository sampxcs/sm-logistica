import Head from 'next/head'

import Form from '../../components/Form'
import Container from '../../components/Container'
import AnimationBackground from '../../components/AnimationBackground'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign In &middot; SM Logística</title>
      </Head>
      <Container>
        <Form />
        <AnimationBackground />
      </Container>
    </>
  )
}
