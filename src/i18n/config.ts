export const defaultLanguage = 'en'
export const languages = ['en', 'de']

// https://www.i18next.com/overview/configuration-options
export const i18nOptions = {
  keySeparator: '.',
  nsSeparator: ':',
  ns: ['translation', 'yup'],
  defaultNs: 'translation',
  // transSupportBasicHtmlNodes: false,
  transKeepBasicHtmlNodesFor: ['br'],
  fallbackLng: defaultLanguage,
  supportedLngs: languages,
  nonExplicitSupportedLngs: false,
  returnEmptyString: false,
  returnNull: false,
  wait: true,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/{{lng}}/{{ns}}',
  },
  detection: {
    // order and from where user language should be detected
    order: ['querystring', 'localStorage', 'cookie', 'path', 'navigator'],
    // keys or params to lookup language from
    lookupQuerystring: 'lang',
    lookupCookie: 'CC',
    lookupLocalStorage: 'lang',
    lookupFromPathIndex: 0,
    // cache user language on
    caches: ['localStorage'],
    // only detect languages that are in the whitelist
    checkSupportedLngs: true,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  parseMissingKeyHandler: (key: string) => {
    const splitKey = key.split('.')
    return splitKey[splitKey.length - 1]
  },
  react: {
    defaultTransParent: 'div',
    useSuspense: true,
    hashTransKey: (defaultValue: string) => {
      // eslint-disable-next-line no-console
      console.error('missing key', defaultValue)
      return defaultValue
    },
  },
}
