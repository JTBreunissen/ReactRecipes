import React from 'react'
import Title from './components/Title'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title content="Hello, World" />
        <Title content="All Recipes" />
      </div>
    )
  }
}

export default App
