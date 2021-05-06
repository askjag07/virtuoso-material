import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Grid,
} from '@material-ui/core'

import '../styles/layout.scss'

export default function Layout({ children, nocta, stuck }) {
  const unsupported = [
    'Android',
    'Linux',
    'armv71',
    'aarch64',
    'i686',
    'iPhone',
    'iPod',
    'iPad',
    'Pike',
    'BlackBerry',
    'Pocket',
    'Nintendo',
    'Nokia',
    'S60',
    'Symbian',
    'PalmOS',
    'webOS',
  ]
  var supported = true
  if (typeof window !== `undefined`) {
    const platform = window.navigator.platform
    if (
      new RegExp(unsupported.join('|')).test(platform) ||
      platform === null ||
      platform === ''
    ) {
      supported = false
    }
  }
  return (
    <div className='root'>
      <AppBar color='inherit' position='static' className='header'>
        <Container>
          <Toolbar>
            <Link to='/' className='title'>
              <StaticImage
                src='../images/logo.png'
                alt='Virtuoso'
                placeholder='tracedSVG'
                layout='fixed'
                height={30}
              />
            </Link>
            <Button
              color='inherit'
              component={Link}
              to='/about/'
              className='page'
            >
              <Typography variant='overline'>About</Typography>
            </Button>
            <Button
              color='inherit'
              component='a'
              rel='noopener noreferrer'
              target='_blank'
              href='https://docs.google.com/forms/d/e/1FAIpQLSfNxRGpIPCBNIJ6cmvDIaVU1srZZtQU9CvNpAp1O3ylC7Jt1w/viewform?usp=sf_link'
              className='page'
            >
              <Typography variant='overline'>Register</Typography>
            </Button>
            <Button
              variant='contained'
              component='a'
              rel='noopener noreferrer'
              target='_blank'
              href='https://docs.google.com/forms/d/e/1FAIpQLSfNxRGpIPCBNIJ6cmvDIaVU1srZZtQU9CvNpAp1O3ylC7Jt1w/viewform?usp=sf_link'
              color='secondary'
              className='cta'
            >
              Get Started
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container className='mobile'>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant='h4'>
              {supported ? 'Window Too Small' : 'Device Not Supported'}
            </Typography>
            <Typography variant='body1'>
              {supported
                ? 'To access the full website, please increase the size of the window.'
                : 'To access the full website, please use a computer. Window size is too small.'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container className='computerOnly'>{children}</Container>
      {!nocta ? (
        <Grid
          container
          justify='center'
          alignItems='center'
          className='finalCTA'
        >
          <Grid item>
            <Typography variant='h3'>Get Started</Typography>
            <Button
              variant='contained'
              size='large'
              component='a'
              rel='noopener noreferrer'
              target='_blank'
              href='https://docs.google.com/forms/d/e/1FAIpQLSfNxRGpIPCBNIJ6cmvDIaVU1srZZtQU9CvNpAp1O3ylC7Jt1w/viewform?usp=sf_link'
              color='secondary'
              className='ctaBtn'
            >
              Enroll
            </Button>
            <Button
              variant='contained'
              size='large'
              component='a'
              target='_blank'
              href='/syllabus.pdf'
            >
              Syllabus
            </Button>
          </Grid>
        </Grid>
      ) : (
        ``
      )}
      <AppBar
        position='static'
        className={'footer ' + (stuck ? 'footer-stuck' : '')}
      >
        <Container className='text-center'>
          <Typography>
            Copyright © 2021 Virtuoso. All Rights Reserved
          </Typography>
        </Container>
      </AppBar>
    </div>
  )
}
