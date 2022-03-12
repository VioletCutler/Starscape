import ReactDOM from 'react-dom'
import React from 'react'
import './style.css'
import App from './App'
import Box from './Components/Box'

import socket from 'socket.io-client';
// import {Provider} from 'react-redux'
// import {Router} from 'react-router-dom'

const clientSocket = socket(window.location.origin);
/*
  Never seen window.location before?
  This object describes the URL of the page we're on!
*/

clientSocket.on('connect', () => {
  console.log('Connected to server');
})

ReactDOM.render(<App />, document.getElementById('root'))

