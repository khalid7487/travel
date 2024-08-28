import i18n from './index'
import {defaultLanguage, languages} from './config'

type PathType = string | string[] | undefined

export const getCurrentLanguage = (): string =>
  (i18n.languages && i18n.languages[0]) || defaultLanguage

export const translatedUrl = (url: string): string =>
  translatedUrlWithLang({
    pathname: url,
    lang: getCurrentLanguage(),
  })

export const getLangFromUrl = (pathname: string): string => {
  const splitPath = pathname.split('/').filter(x => x.length > 0)
  if (languages.includes(splitPath[0])) return splitPath[0]
  return defaultLanguage
}

export const translatedUrlWithLang = ({
  pathname,
  search = '',
  lang,
}: {
  pathname: string
  search?: string
  lang: string
}): string => {
  let newPath = ''
  if (languages.includes(lang) && lang !== defaultLanguage) newPath += `/${lang}`

  let splitPath = pathname.split('/').filter(x => x.length > 0)
  if (languages.includes(splitPath[0])) splitPath = splitPath.slice(1)
  newPath += `/${splitPath.join('/')}`
  return newPath + search
}

export const translatedUrlObj = (url: string): object => ({
  pathname: translatedUrlWithLang({
    pathname: url,
    lang: getCurrentLanguage(),
  }),
  search: window.location.search,
})

export const previousUrl = (url: string): string => {
  const splitPath = url.split('/').filter(x => x.length > 0)
  splitPath.pop()
  return `/${splitPath.join('/')}`
}

export const previousUrlObj = (url: string): object => ({
  pathname: previousUrl(url),
  search: window.location.search,
})

const getLangPrefix = (): string => {
  const langCodesSupported = languages.filter(l => l !== defaultLanguage)
  if (langCodesSupported.length > 0) return `/:locale(${langCodesSupported.join('|')})?`
  return ''
}

export const localizeRoutePath = (path: PathType): PathType => {
  const langPrefix = getLangPrefix()
  switch (typeof path) {
    case 'undefined':
      return undefined
    case 'object':
      return path.map((key: string): string => langPrefix + key)
    default:
      return path === '*' ? path : `${langPrefix}${path}`
  }
}
