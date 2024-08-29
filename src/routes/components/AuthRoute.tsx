import {useLocation, Navigate, Outlet} from 'react-router-dom'

import {MainLayout} from 'layouts'
import useAuthToken from 'hooks/persisted/useAuthToken'

import routes from '../pathConfig'

const AuthRoute = ({roles}: {roles?: string[]}) => {
  const location = useLocation()
  const {authToken, role} = useAuthToken()

  if (!authToken) {
    return <Navigate to={routes.login.to} state={{from: location}} replace />
  }

  if (roles && role && !roles.includes(role)) {
    return <div>You are not allowed to access this page</div>
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export default AuthRoute
