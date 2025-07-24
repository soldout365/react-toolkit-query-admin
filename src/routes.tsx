import DashboardPage from './pages/dashboard/page'
import LoginPage from './pages/login/page'
import PrivateRouter from './components/private-router'
import PublicRoutePage from './components/public-router'
import { createBrowserRouter } from 'react-router-dom'
import RolesPage from './pages/roles-page'
import PermissionsPage from './pages/permissions-page'
import StaffPage from './pages/staff-page'

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
  },
  {
    path: '/roles',
    element: (
      <PrivateRouter>
        <RolesPage />
      </PrivateRouter>
    )
  },
  {
    path: '/permissions',
    element: (
      <PrivateRouter>
        <PermissionsPage />
      </PrivateRouter>
    )
  },
  {
    path: 'staff',
    element: (
      <PrivateRouter>
        <StaffPage />
      </PrivateRouter>
    )
  }
])
