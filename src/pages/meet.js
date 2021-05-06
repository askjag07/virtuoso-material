import React from 'react'
import { navigate } from 'gatsby'
import { useJitsi } from 'react-jutsu'

import '../styles/meet.scss'

function Jutsu() {
  const jitsiConfig = {
    roomName: 'test-meeting',
    displayName: 'Participant',
    password: 'password',
    subject: 'Test Meeting',
    parentNode: 'jitsi-container',
    onMeetingEnd: () => navigate('/'),
    onError: err => {
      console.clear()
      console.error(err)
    },
    configOverwrite: {
      disableTileView: true,
      apiLogLevels: [],
    },
    interfaceConfigOverwrite: {
      HIDE_INVITE_MORE_HEADER: true,
      TOOLBAR_ALWAYS_VISIBLE: true,
      SHOW_CHROME_EXTENSION_BANNER: false,
      DEFAULT_REMOTE_DISPLAY_NAME: 'Guest',
      MOBILE_APP_PROMO: false,
      SETTINGS_SECTIONS: [],
      TOOLBAR_BUTTONS: [
        'microphone',
        'camera',
        'desktop',
        'hangup',
        'chat',
        'sharedvideo',
        'raisehand',
        'stats',
        'shortcuts',
        'tileview',
        'select-background',
        'mute-everyone',
      ],
    },
  }
  const error = useJitsi(jitsiConfig).error

  return (
    <div>
      {error && <p>{error}</p>}
      <div id={jitsiConfig.parentNode} />
    </div>
  )
}

export default function Meet() {
  return <>{typeof window !== 'undefined' && Jutsu()}</>
}
