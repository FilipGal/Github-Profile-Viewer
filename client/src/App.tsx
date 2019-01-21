import React, { Component } from 'react'
import { FetchProfile } from './components/GetUserProfile'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FetchProfile />
        </header>
      </div>
    )
  }
}

export default App
