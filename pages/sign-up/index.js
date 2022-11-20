import Head from 'next/head'

import SignUpForm from '../../components/Form/SignUpForm'
import Container from '../../components/Container'
import AnimationBackground from '../../components/AnimationBackground'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Crear Cuenta &middot; SM Logística</title>
      </Head>
      <Container>
        <SignUpForm />
        <AnimationBackground />
      </Container>
    </>
  )
}
