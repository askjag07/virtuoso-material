import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import '../styles/layout.scss'
import Unsupported from './unsupported'

export default function Layout({ children, nocta, stuck }) {
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
      <Unsupported />
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
