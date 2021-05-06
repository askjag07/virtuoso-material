import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import '../styles/unsupported.scss'

export default function Unsupported() {
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
    <Grid container justify='center' alignItems='center' className='mobile'>
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
  )
}
