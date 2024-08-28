import i18n from 'i18next'
import backend from 'i18next-http-backend'
import {initReactI18next} from 'react-i18next'
import detector from 'i18next-browser-languagedetector'

import {i18nOptions} from './config'
import applyYupTranslations from './yupLocale'

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init(i18nOptions, () => {
    applyYupTranslations()
  })

i18n.on('languageChanged', applyYupTranslations)

export default i18n
