import { useRouter } from 'next/router'
import AreaClientsHomeMain from './AreaClientsHomeMain'
import AreaClientsCreateOrderMain from './AreaClientsCreateOrderMain'
import AreaClientsImportOdersMain from './AreaClientsImportOrdersMain'
import AreaClientsMyOrdersMain from './AreaClientsMyOrdersMain'
import AreaClientsUsersMain from './AreaClientsUsersMain'

export default function Main() {
  const router = useRouter()

  if (router.asPath === '/area-clientes/inicio') return <AreaClientsHomeMain />
  if (router.asPath === '/area-clientes/crear-pedido') return <AreaClientsCreateOrderMain />
  if (router.asPath === '/area-clientes/importar-pedidos') return <AreaClientsImportOdersMain />
  if (router.asPath === '/area-clientes/mis-pedidos') return <AreaClientsMyOrdersMain />
  if (router.asPath === '/area-clientes/usuarios') return <AreaClientsUsersMain />
}
