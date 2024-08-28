import React from 'react'
import {useLocation, Navigate, Outlet} from 'react-router-dom'

import {MainLayout} from 'layouts'
import useAuthToken from 'hooks/persisted/useAuthToken'
import useRefreshToken from 'hooks/helpers/useRefreshToken'

import routes from '../pathConfig'

const AuthRoute = ({roles}: {roles?: string[]}) => {
  const location = useLocation()
  const {triggerRefreshToken} = useRefreshToken()
  const {authToken, role, expirationTime, refreshToken} = useAuthToken()

  React.useEffect(() => {
    const currentTime = Date.now() + 10 * 60 * 1000

    if (refreshToken && expirationTime) {
      const interval = setInterval(() => {
        if (currentTime >= expirationTime) triggerRefreshToken({token: refreshToken})
      }, 3600000) // Check every hour

      return () => clearInterval(interval)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshToken])

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
