import {styled} from '@mui/material/styles'

export const CardStyles = styled('div')({
  marginTop: 20,
  borderRadius: 5,
  boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.25)',
  padding: 10,
})

export const BoxWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

export const Box = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: 15,
})

export const Text = styled('div')(({theme}) => ({
  color: theme.palette.text.secondary,
  fontSize: 16,
}))

export const ImgWrapper = styled('div')(({backgroundColor}: {backgroundColor?: string}) => ({
  background: backgroundColor && backgroundColor,
  height: 35,
  width: 35,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: 5,
}))

export const BottomImgWrapper = styled('div')(({backgroundColor}: {backgroundColor?: string}) => ({
  background: backgroundColor && backgroundColor,
  height: 25,
  width: 25,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: 5,
}))

export const Title = styled('div')(({theme}) => ({
  color: theme.palette.secondary.main,
  fontSize: 20,
  fontWeight: 700,
  marginTop: 15,
}))

export const BottomWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: 15,
  columnGap: 5,
})

export const SubTitle = styled('div')(({theme}) => ({
  color: theme.palette.text.secondary,
  fontSize: 12,
}))
