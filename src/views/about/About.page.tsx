import {Box, Typography} from '@mui/material'

import {Button} from '@core'
import NmsLogo from 'images/nms.png'
import Card from '@core/Card'

import {Grid} from './about.styles'

const aboutInfo = [
  {
    id: 1,
    title: 'Who We Are',
    content:
      'Founded in 2015, Zoftify is a 30-person travel software development agency specializing exclusively in the travel sector. We offer expert advice, guidance, and build innovative travel technology solutions to our clients.',
  },
  {
    id: 2,
    title: 'Why Travel?',
    content:
      'We used to work with various industries, with travel making up about 40% of our business. But at the end of the pandemic, we saw a big opportunity in digital products for travel. We took a risk and decided to focus only on travel and hospitality software. This decision has been a great success for us in the past three years.',
  },
  {
    id: 3,
    title: 'Mission',
    content:
      'Our goal is to assist travel companies in using modern technology to streamline their operations, enhance traveler satisfaction, and drive growth. We are dedicated to closing the digital gap by educating businesses on the benefits of digital transformation.',
  },
  {
    id: 4,
    title: 'Vision',
    content:
      'We aim to become a global leader in introducing innovation to the traditionally technology-resistant travel industry.',
  },
]

const AboutPage = () => (
  <Box>
    <Box sx={{textAlign: 'center'}}>
      <Typography variant='h1' mt={3}>
        About Zoftify
      </Typography>
      <Typography variant='h5' mt={2}>
        we are a design and development partner for travel and hospitality companies, well-versed in
        the specific needs and nuances of the industry
      </Typography>
      <Button variant='contained' sx={{mt: 3}}>
        Contact Us
      </Button>
    </Box>

    <Box sx={{mt: 3}}>
      {aboutInfo.map(item => (
        <Box sx={{mt: 6}} key={item.id}>
          <Typography variant='h2' mt={2}>
            {item.title}
          </Typography>
          <Typography variant='h5' mt={1}>
            {item.content}
          </Typography>
        </Box>
      ))}
    </Box>

    <Box sx={{textAlign: 'center', mt: 16}}>
      <img src={NmsLogo} height={80} width={80} />
      <Typography variant='h6' mt={1} color='rgb(100 112 130)'>
        Founder & CEO
      </Typography>
      <Typography variant='h1' mt={1}>
        Jhon Doe
      </Typography>
      <Typography variant='h5' mt={2}>
        Alex loves travel and tech and founded Zoftify to help travel companies use technology more
        effectively. Before this, he worked in tech consulting, where he led international mobile
        development teams.
      </Typography>

      <Button variant='contained' sx={{mt: 3}}>
        Linkedin
      </Button>
    </Box>

    <Box sx={{textAlign: 'center', mt: 16}}>
      <Typography variant='h1' mt={1}>
        Experience and expertise
      </Typography>

      <Card isCard>
        <Grid>
          <div>
            <Typography variant='h1'>100%</Typography>
            <Typography variant='h6' mt={2}>
              Specialized in travel
            </Typography>
          </div>
          <div>
            <Typography variant='h1'>120+</Typography>
            <Typography variant='h6' mt={2}>
              Placed we travel
            </Typography>
          </div>
          <div>
            <Typography variant='h1'>300+</Typography>
            <Typography variant='h6' mt={2}>
              Specialized tour guide
            </Typography>
          </div>
          <div>
            <Typography variant='h1'>100%</Typography>
            <Typography variant='h6' mt={2}>
              Safe Journey
            </Typography>
          </div>
        </Grid>
      </Card>
    </Box>
  </Box>
)

export default AboutPage
