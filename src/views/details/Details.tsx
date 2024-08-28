import {Route, Routes, Navigate} from 'react-router-dom'

import AuthBlock, {AuthRightBlock} from 'components/AuthBlock'
import routes from 'routes'

import DetailsPage from './Details.page'

const Details = () => (
  <AuthBlock>
    <AuthRightBlock fullWidth={true}>
      <Routes>
        <Route index Component={DetailsPage} />

        <Route path='*' element={<Navigate to={routes.notFound.to} replace />} />
      </Routes>
    </AuthRightBlock>
  </AuthBlock>
)
export default Details
