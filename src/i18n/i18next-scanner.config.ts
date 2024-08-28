/* eslint-disable */
const languages = ['en', 'de']
const defaultLang = 'en'

export default {
  input: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.spec.{js,jsx,ts,tsx}',
    '!src/i18n/**',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: true,
    sort: true,
    removeUnusedKeys: false,
    // removeUnusedKeys: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
      fallbackKey: (_ns: string | string[], value: string) => value,
      acorn: {
        ecmaVersion: 10, // defaults to 10
        sourceType: 'module', // defaults to 'module'
        // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
      },
    },
    defaultLng: defaultLang,
    lngs: languages,
    ns: ['translation', 'yup'],
    defaultNs: 'translation',
    // defaultValue: (lng, ns, key, opts) => {
    //   if(opts.defaultValue && opts.defaultValue.length > 0)
    //     return opts.defaultValue
    //   if (lng === defaultLang) {
    //     return key; // Use key as value for base language
    //   }
    //   return key + '_not_translated'; // Return empty string for other languages
    // },
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    keySeparator: '.', // key separator
    nsSeparator: ':', // namespace separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
}
