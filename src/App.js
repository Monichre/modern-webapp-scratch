import React, { Component } from 'react'
import Avatar, { Size } from '@jetbrains/ring-ui/components/avatar/avatar'
import SiteHeader from './components/siteHeader'
import { hot } from 'react-hot-loader'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>
          <Avatar size={2} /> Hello, World!{' '}
        </h1>{' '}
      </div>
    )
  }
}

export default hot(module)(App)
