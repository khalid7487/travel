import {Box, Typography} from '@mui/material'
import React from 'react'
import {useParams} from 'react-router-dom'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'

import Card from '@core/Card'
import {Grid} from 'views/home/Home.styles'
import {travelConfig} from 'views/home/home.config'

import VideoModal from './videoModal'

const DetailsPage = () => {
  const {id} = useParams<{id: string}>()
  const [isOpened, setIsOpened] = React.useState(false)
  const [url, setUrl] = React.useState<string>()

  //   const Field = React.useMemo(() => (type === 'password' ? InputPassword : TextField), [type])

  const singleItem = React.useMemo(() => travelConfig.find(item => item.id === Number(id)), [id])

  return (
    <>
      <Card isCard>
        <Box p={3}>
          <Box position='relative'>
            <img src={singleItem?.image} height={250} width='100%' style={{display: 'block'}} />

            <Box
              position='absolute'
              top={2}
              right='10px'
              display='flex'
              alignItems='baseline'
              mt={1}
              gap={1}
            >
              <Typography variant='h5' color='#FFFFFF'>
                Price:
              </Typography>
              <Typography variant='h6' color='#FFFFFF'>
                12000
              </Typography>
            </Box>
            <Box
              position='absolute'
              bottom={8}
              left='10px'
              //   transform='translateX(-50%)'
              bgcolor='rgba(0, 0, 0, 0.5)'
              p={1}
              sx={{cursor: 'pointer'}}
              onClick={() => {
                setIsOpened(true)
                setUrl(singleItem?.videoUrl as string)
              }}
            >
              <SmartDisplayIcon sx={{color: 'white', fontSize: '40px'}} />
            </Box>
          </Box>

          <Box display='flex' alignItems='baseline' flexDirection='column' mt={3} gap={1}>
            <Typography variant='h5'>Descriptions:</Typography>
            <Typography variant='h6'>{singleItem?.description}</Typography>
          </Box>

          <Box display='flex' alignItems='baseline' mt={3} gap={1}>
            <Typography variant='h5'>Place Name:</Typography>
            <Typography variant='h6'>{singleItem?.name}</Typography>
          </Box>

          <Box display='flex' alignItems='baseline' mt={3} gap={1}>
            <Typography variant='h5'>From:</Typography>
            <Typography variant='h6' textTransform='capitalize'>
              {singleItem?.from}
            </Typography>
          </Box>

          <Box display='flex' alignItems='baseline' mt={3} gap={1}>
            <Typography variant='h5'>Destinations:</Typography>
            <Typography variant='h6' textTransform='capitalize'>
              {singleItem?.to}
            </Typography>
          </Box>
        </Box>

        <VideoModal isOpen={isOpened} setIsOpen={setIsOpened} url={url} />
      </Card>
      <Box mt={6}>
        <Typography variant='h5'>Related:</Typography>
        <Grid>
          {travelConfig.map(item => (
            <Card isCard>
              <Box p={2}>
                <Box>
                  <img src={item.image} height={150} width={'100%'} />
                  <Typography variant='h6' mt={1}>
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default DetailsPage
