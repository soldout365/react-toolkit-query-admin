import DashboardPage from './pages/dashboard/page'
import LoginPage from './pages/login/page'
import PrivateRouter from './components/private-router'
import PublicRoutePage from './components/public-router'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicRoutePage>
        <LoginPage />
      </PublicRoutePage>
    )
  },
  {
    path: '/',
    element: (
      <PrivateRouter>
        <DashboardPage />
      </PrivateRouter>
    )
  }
])
