import React from 'react';
import App from './app';
import './scenes/assets/css/icon.css'
import RvcCore from '@Rvc/Core'

const rvc = new RvcCore()

rvc.initRsa('http://localhost:8003')
rvc.initWebsocket('ws://127.0.0.1:9002')


rvc.run('root', <App />)
