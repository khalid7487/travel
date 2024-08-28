import {Route, Routes, Navigate} from 'react-router-dom'

import AuthBlock, {AuthRightBlock} from 'components/AuthBlock'
import routes from 'routes'

import AboutPage from './About.page'

const About = () => (
  <AuthBlock>
    <AuthRightBlock fullWidth={true}>
      <Routes>
        <Route index Component={AboutPage} />

        <Route path='*' element={<Navigate to={routes.notFound.to} replace />} />
      </Routes>
    </AuthRightBlock>
  </AuthBlock>
)
export default About
