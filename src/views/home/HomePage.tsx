import React from 'react'
import * as yup from 'yup'
import {useNavigate} from 'react-router-dom'
import {Box, Typography} from '@mui/material'

import Card from '@core/Card'
import routes from 'routes'
import {Autocomplete, Button, Form} from '@core'
import useYupHooks from 'hooks/helpers/useYupHooks'

import {searchConfig, travelConfig} from './home.config'
import {Grid} from './Home.styles'
import BookingFormModal from './BookingFormModal'

const schema = yup.object().shape({
  from: yup.string().required().label('From').trim().lowercase(),
  destination: yup.string().required().label('Destination').trim().lowercase(),
})

type SearchFields = yup.InferType<typeof schema>

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

const HomePage = () => {
  const navigation = useNavigate()
  const {setApiError, ...methods} = useYupHooks({schema})
  const [data, setData] = React.useState(travelConfig)
  const [isOpen, setIsopen] = React.useState(false)
  const [packages, setPackage] = React.useState<Destination>()

  const handleSearch = (values: SearchFields) => {
    const filteredData = travelConfig.filter(
      item =>
        item.from.toLowerCase() === values.from && item.to.toLowerCase() === values.destination,
    )
    setData(filteredData)
  }

  return (
    <div>
      <Card isCard>
        <Box mb={6} p={3}>
          <Typography variant='h6' mb={3}>
            Find Destinations:
          </Typography>
          <Form formMethods={methods} onSubmit={handleSearch}>
            <Box
              display='flex'
              gap={5}
              sx={{flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center'}}
            >
              <Autocomplete name='from' label='From' options={searchConfig} />
              <Autocomplete name='destination' label='Destination' options={searchConfig} />
              <Button
                variant='contained'
                color='success'
                type='submit'
                size='small'
                sx={{width: 200}}
              >
                Search
              </Button>
            </Box>
          </Form>
        </Box>
      </Card>

      <Box mb={6}>
        <Grid>
          {data.map(item => (
            <Card isCard>
              <Box p={2}>
                <Box
                  sx={{cursor: 'pointer'}}
                  onClick={() => {
                    setPackage(item)
                    setIsopen(true)
                  }}
                >
                  <img src={item.image} height={150} width={'100%'} />
                  <Typography variant='h6' mt={1}>
                    {item.name}
                  </Typography>
                </Box>

                <Box display='flex' justifyContent='space-between'>
                  <Button
                    variant='contained'
                    color='success'
                    size='small'
                    sx={{mt: 2, color: '#FFFFFF'}}
                    onClick={() => {
                      setPackage(item)
                      setIsopen(true)
                    }}
                  >
                    Book now
                  </Button>

                  <Button
                    variant='contained'
                    color='secondary'
                    size='small'
                    sx={{mt: 2, color: '#FFFFFF'}}
                    onClick={() => navigation(routes.details.to + item.id)}
                  >
                    View details
                  </Button>
                </Box>
              </Box>
            </Card>
          ))}
        </Grid>

        <BookingFormModal data={packages} isOpen={isOpen} setIsOpen={setIsopen} />
      </Box>
    </div>
  )
}

export default HomePage
