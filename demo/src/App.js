import React, { Component } from 'react'
import logo from '../../src/assets/img/app-icon.png'
import expoQr from './assets/img/expo-qr.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">lbd-react-native</h1>
          <p className="App-intro">
            An unofficial companion app for those who want to know everything
            about SpaceX.
          </p>
        </header>
        <p>
          Scan to open Scan this QR code with your Expo mobile app to load the
          project immediately.
        </p>
        <img src={expoQr} alt="expo-qr-code" />
      </div>
    )
  }
}

export default App
