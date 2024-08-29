import * as yup from 'yup'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {Box, Typography} from '@mui/material'
import {UseFormReturn} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

import routes from 'routes'
import Modal from '@core/Modal'
import useYupHooks from 'hooks/helpers/useYupHooks'
import useAuthToken from 'hooks/persisted/useAuthToken'
import useBookingData from 'hooks/persisted/useBookingData'
import {Button, Form, Input, DatePicker, PhoneInput} from '@core'

type Destination = {
  id: number
  name: string
  image: string
  from: string
  to: string
  description: string
  videoUrl: string
  isAvailable: boolean
}

type BookingFormModalProps = {
  data?: Destination
  isOpen: boolean
  setIsOpen: (data: boolean) => void
}

const schema = yup.object().shape({
  email: yup.string().email().required().label('Email').trim().lowercase(),
  username: yup.string().required().label('Username').trim(),
  phone: yup.string().required().label('Phone Number').trim(),
  destinationDate: yup
    .date()
    .typeError('Destinations Date must be a valid date')
    .required()
    .label('Destinations Date'),
})

type BookingFields = yup.InferType<typeof schema>

const BookingFormModal = ({data, isOpen, setIsOpen}: BookingFormModalProps) => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const [isSaved, setIsSaved] = React.useState(false)
  const {authToken} = useAuthToken()
  const {bookingData, setBookingData, removeBookingData} = useBookingData()
  const {...methods} = useYupHooks<BookingFields & UseFormReturn>({
    schema,
    defaultValues: bookingData,
  })

  const onSubmit = (data: BookingFields) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {destinationDate, ...rest} = data
    if (authToken) {
      setBookingData(rest)
      setIsSaved(true)
      removeBookingData()
    } else {
      setBookingData(rest)
      navigate(routes.login.to)
    }
  }

  return (
    <Modal
      maxWidth='550px'
      title='Booking Travel'
      isOpened={isOpen}
      onClose={() => {
        setIsSaved(false)
        setIsOpen(false)
      }}
    >
      {!isSaved ? (
        <>
          <Typography mb={2} variant='h4' color='GrayText'>
            Thanks for showing your interest
          </Typography>
          <Typography mb={2} variant='h6'>
            Your Destination: {data?.name}
          </Typography>
          <Form formMethods={methods} onSubmit={onSubmit}>
            <Box display='flex' flexDirection='column' rowGap={2}>
              <Input
                name='username'
                label={'Username'}
                placeholder={'Enter your username'}
                required
              />

              <Input
                name='email'
                label={t('forms.labels.email')}
                placeholder={t('forms.placeholders.email')}
                required
              />

              <PhoneInput name='phone' label='Phone Number' />
              <DatePicker name='destinationDate' label={'Destinations Date'} />
            </Box>

            <Button type='submit' variant='contained' sx={{mt: 2}}>
              Save
            </Button>
          </Form>
        </>
      ) : (
        <Box textAlign='center'>
          {/* <img src={SuccessImg} height={100} width={100} alt='img' /> */}
          <CheckCircleOutlineIcon style={{fontSize: '150px', color: '#01B0FF'}} />
          <Typography variant='h2' color='#7635DC'>
            Success!!
          </Typography>
        </Box>
      )}
    </Modal>
  )
}

export default BookingFormModal
