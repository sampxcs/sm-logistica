import Head from 'next/head'

import SignInForm from '../../components/Form/SignInForm'
import Container from '../../components/Container'
import AnimationBackground from '../../components/AnimationBackground'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Inicia Sesion &middot; SM Logística</title>
      </Head>
      <Container>
        <SignInForm />
        <AnimationBackground />
      </Container>
    </>
  )
}
