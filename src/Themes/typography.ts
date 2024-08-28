import {type TypographyOptions} from '@mui/material/styles/createTypography'

export const fontSizes = {
  ultraSmall: '0.625rem', // 10px
  extraSmall: '0.75rem', // 12px
  small: '0.875rem', // 14px
  default: '1rem', // 16px
  medium: '1.125rem', // 18px
  large: '1.25rem', // 20px
  extraLarge: '1.375rem', // 22px
  ultraLarge: '1.5rem', // 24px
  titleSmall: '1.75rem', // 28px
  title: '2.25rem', // 36px
  titleMedium: '2.75rem', // 44px
  titleLarge: '3.25rem', // 52px
}

export const fontFamilies = {
  default: 'Public Sans',
}

export const typography: TypographyOptions = {
  fontSize: 16,
  fontFamily: fontFamilies.default,
  h1: {
    fontSize: fontSizes.titleLarge,
  },
  h2: {
    fontSize: fontSizes.titleMedium,
  },
  h3: {
    fontSize: fontSizes.title,
  },
  h4: {
    fontSize: fontSizes.titleSmall,
  },
  h5: {
    fontSize: fontSizes.ultraLarge,
  },
  h6: {
    fontSize: fontSizes.medium,
  },
  subtitle1: {
    fontSize: fontSizes.extraLarge,
  },
  subtitle2: {
    fontSize: fontSizes.default,
  },
  body1: {
    fontSize: fontSizes.small,
  },
  body2: {
    fontSize: fontSizes.extraSmall,
  },
  caption: {
    fontSize: fontSizes.ultraSmall,
  },
  overline: {
    fontSize: fontSizes.large,
  },
}

export default typography
