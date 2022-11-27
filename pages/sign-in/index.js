import Head from 'next/head'
import { useRouter } from 'next/router'

import useUser from '../../hooks/useUser'

import { USER_STATUS } from '../../utils/dictionary'

import SignInForm from '../../components/Form/SignInForm'
import Container from '../../components/Container'
import AnimationBackground from '../../components/AnimationBackground'

export default function SignIn() {
  const router = useRouter()
  const { userStatusCode } = useUser()
  userStatusCode === USER_STATUS.OK && router.replace('/clients-area/admin')

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
