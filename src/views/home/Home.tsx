import {Route, Routes, Navigate} from 'react-router-dom'

import AuthBlock, {AuthRightBlock} from 'components/AuthBlock'
import routes from 'routes'

import HomePage from './HomePage'

const Home = () => (
  <AuthBlock>
    <AuthRightBlock fullWidth={true}>
      <Routes>
        <Route index Component={HomePage} />

        <Route path='*' element={<Navigate to={routes.notFound.to} replace />} />
      </Routes>
    </AuthRightBlock>
  </AuthBlock>
)
export default Home
