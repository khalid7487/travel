import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import routes from 'routes'
import Login from 'views/auth/Login'
import Registration from 'views/auth/Registration'
import {NonAuthLayout} from 'layouts'
import Home from 'views/home'
import About from 'views/about'
import Details from 'views/details'

const App: React.FC = () => (
  <Routes>
    {/* NonAuth routes start */}
    <Route
      path={`${routes.home.path}/*`}
      element={
        <NonAuthLayout>
          <Home />
        </NonAuthLayout>
      }
    />

    <Route
      path={`${routes.details.path}/*`}
      element={
        <NonAuthLayout>
          <Details />
        </NonAuthLayout>
      }
    />

    <Route
      path={`${routes.about.path}/*`}
      element={
        <NonAuthLayout>
          <About />
        </NonAuthLayout>
      }
    />
    <Route
      path={`${routes.login.path}/*`}
      element={
        <NonAuthLayout>
          <Login />
        </NonAuthLayout>
      }
    />
    <Route
      path={`${routes.register.path}/*`}
      element={
        <NonAuthLayout>
          <Registration />
        </NonAuthLayout>
      }
    />

    <Route path={routes.notFound.path} element={<div>Not Found</div>} />
    <Route path='*' element={<Navigate to={routes.notFound.to} />}></Route>
  </Routes>
)

export default App
