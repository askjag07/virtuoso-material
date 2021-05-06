import React from 'react'
import { Link } from 'gatsby'
import { Grid, Typography, Button } from '@material-ui/core'

import Layout from '../templates/layout'
import '../styles/404.scss'

export default function Lost() {
  return (
    <Layout nocta={true} stuck={true}>
      <Grid container justify='center' alignItems='center' className='lost'>
        <Grid item xs={4}>
          <Typography variant='h4'>Page Not Found</Typography>
          <Typography variant='body1'>
            Oops! The page you are looking for does not exist.
          </Typography>
          <Button variant='contained' component={Link} to='/'>
            Go Back
          </Button>
        </Grid>
      </Grid>
    </Layout>
  )
}
