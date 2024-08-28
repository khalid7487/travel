import React from 'react'
import {ThemeProvider as MuiThemeProvider, createTheme, CssBaseline} from '@mui/material'

import PublicSansRegular from 'Styles/fontFiles/PublicSans/PublicSans-Regular.woff2'

import {typography} from './typography'
import breakpoints from './breakpoints'
import palette from './colors/palette'
import DefaultStyles from './DefaultStyles'

type ThemeProviderProps = {
  children: React.ReactElement
}

type FontFaceProps = {
  name: string
  src: string
  fontWeight?: number
  fontStyle?: string
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}): React.ReactElement => {
  const fontFace = React.useCallback(
    ({name, src, fontWeight = 400, fontStyle = 'normal'}: FontFaceProps): string => `
      @font-face{
        font-family: ${name};
        font-style: ${fontStyle};
        font-display: swap;
        font-weight: ${fontWeight};
        src: local('${name}'), local('${name}-Regular'), url(${src}) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
    `,
    [],
  )
  const themeOptions = React.useMemo(
    () => ({
      typography,
      breakpoints,
      palette,
      components: {
        MuiCssBaseline: {
          styleOverrides: fontFace({
            name: 'Public Sans',
            src: PublicSansRegular,
            fontWeight: 400,
            fontStyle: 'normal',
          }),
        },
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const theme = createTheme(themeOptions)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultStyles />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
