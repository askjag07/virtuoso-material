import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
        alignItems='center'
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
                        <ListItemText>
                          <span role='img' aria-label='Bullet'>
                            •
                          </span>
                          &nbsp;&nbsp;&nbsp;
                          {item}
                        </ListItemText>
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
