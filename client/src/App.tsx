import React, { Component } from 'react'
import UserProfile from './components/GetUserProfile'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserProfile />
        </header>
      </div>
    )
  }
}

export default App
