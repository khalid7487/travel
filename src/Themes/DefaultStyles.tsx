import {GlobalStyles, useTheme} from '@mui/material'

const DefaultStyles = () => {
  const theme = useTheme()
  return (
    <GlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          margin: 0,
          padding: '0 !important',
          height: '100%',
          width: '100%',
          overflow: 'auto !important',
        },
        header: {
          padding: '0 !important',
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
        },
        [theme.breakpoints.down('sm')]: {
          body: {
            padding: '0px 20px',
          },
        },
      }}
    />
  )
}

export default DefaultStyles
