import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  Grid,
  Typography,
  Hidden,
  Button,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'

import Layout from '../templates/layout'
import '../styles/index.scss'

export default function Home() {
  const softskills = [
    {
      title: 'Problem Solving',
      text:
        'Students get several challenges and puzzles both inside and outside sessions to stay sharp and increase their work efficiency.',
    },
    {
      title: 'Critical Thinking',
      text:
        'Students actively participate in classroom discussions to improve and fine-tune their understanding of programming.',
    },
    {
      title: 'Teamwork',
      text:
        'Students join a live programming community for free with documentation, resources, and support after sessions.',
    },
  ]

  return (
    <Layout>
      <Grid
        spacing={4}
        container
        justify='center'
        alignItems='center'
        className='heroBox'
      >
        <Grid item xs={6}>
          <Typography variant='h2' className='heroTitle'>
            Free Coding Camp for
            <Hidden mdDown>
              <br />
            </Hidden>{' '}
            Classes 8 to 10
          </Typography>
          <Typography variant='body1' display='block' className='heroPara'>
            Virtuoso provides students free JavaScript classes brimming with
            critical thinking activities, enriching code labs, inspiring
            projects, and more. Learn quintessential skills required for
            competing in this age of technology.
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            component='a'
            rel='noopener noreferrer'
            target='_blank'
            href='https://docs.google.com/forms/d/e/1FAIpQLSfNxRGpIPCBNIJ6cmvDIaVU1srZZtQU9CvNpAp1O3ylC7Jt1w/viewform?usp=sf_link'
            className='cta'
          >
            Enroll
          </Button>
          <Button
            variant='contained'
            component='a'
            target='_blank'
            href='/syllabus.pdf'
          >
            Syllabus
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        justify='center'
        alignItems='center'
        spacing={4}
        className='rightBox'
      >
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align='right'>JavaScript</TableCell>
                  <TableCell align='right'>Python</TableCell>
                  <TableCell align='right'>C/C++</TableCell>
                  <TableCell align='right'>Java</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Websites</TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Crossmark'>
                      ❌
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Crossmark'>
                      ❌
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AI/ML</TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hybrid Apps</TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Crossmark'>
                      ❌
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Crossmark'>
                      ❌
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Crossmark'>
                      ❌
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Game Development</TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Servers</TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                  <TableCell align='right'>
                    <span role='img' aria-label='Checkmark'>
                      ✔
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={5}>
          <Typography variant='h3' className='heroTitle'>
            Why JavaScript?
          </Typography>
          <Typography variant='body1' display='block' className='heroPara'>
            JavaScript is the most widely used and supported language according
            to{' '}
            <a
              href='https://madnight.github.io/githut/#/pushes/2021/1'
              target='_blank'
              rel='noreferrer noopener'
            >
              Github
            </a>
            . For both beginners and professionals, it offers a more efficient
            solution for the rapid development criteria of modern workspaces.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify='center'
        alignItems='center'
        spacing={4}
        className='leftBox'
      >
        <Grid item xs={5}>
          <Typography variant='h3' className='heroTitle'>
            Education Standards
          </Typography>
          <Typography variant='body1' display='block' className='heroPara'>
            Programming is the art of exploration and learning interesting
            things every day. Students cultivate this art with various
            activities to further hone their skills. The curriculum was designed
            to be both engaging and creative.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <StaticImage
            src='../images/graph.svg'
            alt='Education Standards'
            placeholder='tracedSVG'
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} className='paddBox'>
        <Grid item xs={12}>
          <Typography variant='h3'>Develop Soft Skills</Typography>
        </Grid>
        {softskills.map(skill => {
          return (
            <Grid item xs={4} key={skill.title}>
              <Paper>
                <Typography variant='h6'>{skill.title}</Typography>
                <Typography variant='body1'>{skill.text}</Typography>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}
