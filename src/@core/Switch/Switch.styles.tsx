import {styled} from '@mui/material/styles'
import {Switch as MuiSwitch} from '@mui/material'

export const StyledSwitch = styled(MuiSwitch)(({theme}) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 15,
    opacity: 1,
    border: `3px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.paper,
  },

  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.background.paper,
  },

  '& .MuiSwitch-thumb ': {
    boxShadow: 'none',
    width: 12,
    height: 12,
    margin: 4,
    color: theme.palette.primary.main,
  },

  '& > .MuiIconButton-root:hover': {
    background: 'none',
  },

  // ${({theme}) => theme.breakpoints.down('tablet')} {
  //   justify-self: end;
  // }
}))

export const Title = styled('div')(({theme}) => ({
  fontSize: 16,
  fontWeight: 'bold',
  margin: '20px 0',
  [theme.breakpoints.down('xs')]: {
    marginBottom: 10,
  },
}))

export const Text = styled('div')({})

export const Wrapper = styled('div')({
  width: '100%',
})

//to use when there are more than 1 row in settings
export const PaddingWrapper = styled('div')(({theme}) => ({
  paddingTop: 20,
  width: '100%',
  [theme.breakpoints.down('xs')]: {
    padding: 0,
  },
}))

export const ItemWrapper = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: 30,

  [theme.breakpoints.down('xs')]: {
    justifyContent: 'space-between',
  },
}))
