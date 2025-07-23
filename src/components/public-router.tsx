import { Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/auth-context'

const PublicRoutePage = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAuth()
  if (accessToken) return <Navigate to='/' />
  return <>{children}</>
}

export default PublicRoutePage
