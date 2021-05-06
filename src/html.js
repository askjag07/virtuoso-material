import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html lang='en' {...props.htmlAttributes}>
      <head>
        <title>Virtuoso · Free Coding Camp</title>
        <meta
          name='description'
          content='Free JavaScript classes brimming with critical thinking activities, enriching code labs, inspiring projects, and more. Learn quintessential skills required for competing in this age of technology.'
        ></meta>
        <meta
          name='keywords'
          content='Coding, Summer Camp, JavaScript, Software Training'
        />
        <meta name='author' content='Akshaj Jagarapu' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src='https://meet.jit.si/external_api.js' />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
