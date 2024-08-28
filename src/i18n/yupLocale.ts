// src/yupLocale.ts
import {setLocale} from 'yup'

import i18n from './index'

const applyYupTranslations = () => {
  const translation = i18n.getResourceBundle(i18n.language, 'yup')

  if (translation) {
    setLocale(translation)
  }
}

export default applyYupTranslations
