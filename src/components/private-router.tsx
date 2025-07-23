import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/contexts/auth-context'

const PrivateRouter = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, accessToken } = useAuth()
  console.log('🚀 ~ PrivateRouter ~ isAuthenticated:', isAuthenticated)

  if (!isAuthenticated) return null

  if (!accessToken) return <Navigate to='/login' />

  return <>{children ? children : <Outlet />}</>
}

export default PrivateRouter
