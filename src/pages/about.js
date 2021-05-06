import React from 'react'
import {
  Grid,
  Typography,
  Paper,
  List,
  Divider,
  ListItem,
} from '@material-ui/core'

import Layout from '../templates/layout'
import '../styles/about.scss'

export default function About() {
  const merits = [
    {
      title: 'Languages',
      list: [
        'JavaScript',
        'TypeScript',
        'Python',
        'Shell Script',
        'Golang',
        'C++',
        'Dart',
        'SCSS',
      ],
    },
    {
      title: 'Frameworks',
      list: [
        'ReactJS',
        'GatsbyJS',
        'AngularJS',
        'Angular',
        'Ionic',
        'Tensorflow',
        'Keras',
        'Flutter',
      ],
    },
    {
      title: 'Expertise',
      list: [
        'Cloud Infrastructure Management',
        'Authentication & Web Security',
        'Front-End Development',
        'Back-End Development',
        'AI & Data Science',
        'MongoDB',
      ],
    },
    {
      title: 'Tools',
      list: [
        'Visual Studio Code',
        'Android Studio',
        'Xcode',
        'MongoDB Compass',
        'Postman',
      ],
    },
    {
      title: 'Operating Systems',
      list: ['Debian', 'Ubuntu', 'MacOS', 'Windows'],
    },
    {
      title: 'Cloud',
      list: ['AWS', 'GCP', 'Digital Ocean'],
    },
    {
      title: 'Experience',
      list: ['1 Year, Arunam Technologies'],
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
          <Typography variant='h2'>Mission</Typography>
          <Typography variant='body1' className='heroPara'>
            "The new era brought upon us by COVID-19 has caused tremendous
            change everywhere, especially in education. The new outlook society
            has on technology has made it open to a new system of education.
            This, combined with my passionate feelings towards sharing my
            knowledge as a full-stack developer, created Virtuoso."
            <br />
            <br />
            <em>Akshaj Jagarapu, Founder</em>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='h2' className='resume'>
        Teacher's Résumé
      </Typography>
      <Grid
        spacing={4}
        container
        justify='center'
        alignItems='flex-start'
        className='meritBox'
      >
        {merits.map(merit => {
          return (
            <Grid item xs={4} key={merit.title}>
              <Paper className='merit'>
                <Typography variant='h6'>{merit.title}</Typography>
                <Divider />
                <List>
                  {merit.list.map(item => {
                    return (
                      <ListItem key={item}>
                        <span role='img' aria-label='Bullet'>
                          •
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        {item}
                      </ListItem>
                    )
                  })}
                </List>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}
