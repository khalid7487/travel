import {type PaletteColor, type PaletteOptions, type Color} from '@mui/material'
import {alpha} from '@mui/material/styles'

type ColorProps = {
  0: string
  1000: string
} & Color

// SETUP COLORS
const GREY: ColorProps = {
  0: '#FFFFFF',
  50: '#f5f5f5',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  1000: '#000000',
  A100: '#F9FAFB',
  A200: '#F4F6F8',
  A400: '#C4CDD5',
  A700: '#454F5B',
}

const PRIMARY: PaletteColor = {
  light: '#B0FFFF ',
  main: '#00E7E7',
  dark: '#029494',
  contrastText: GREY[0],
}

const SECONDARY: PaletteColor = {
  light: '#B189F1 ',
  main: '#7635DC ',
  dark: '#3C117E',
  contrastText: GREY[1000],
}

const INFO: PaletteColor = {
  light: '#82D3F8',
  main: '#01B0FF',
  dark: '#106C96',
  contrastText: GREY[0],
}

const SUCCESS: PaletteColor = {
  light: '#76abab',
  main: '#578d8d ',
  dark: '#76abab ',
  contrastText: GREY[800],
}

const WARNING: PaletteColor = {
  light: '#F8D46B',
  main: '#F0B400 ',
  dark: '#896C15 ',
  contrastText: GREY[800],
}

const ERROR: PaletteColor = {
  light: '#FF8159',
  main: '#F43B00 ',
  dark: '#7C2104',
  contrastText: GREY[0],
}

const palette: PaletteOptions = {
  mode: 'light',
  common: {black: GREY[1000], white: GREY[0]},
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[1000],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: GREY[0],
    default: GREY[0],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    activatedOpacity: 0.08,
  },
}

export default palette
