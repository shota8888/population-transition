import React from 'react'
import { Header } from './components/Header/Header'
import { Content } from './components/Top/Content'
import { GlobalStyle } from './styles/global'

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <Content />
      </div>
    </>
  )
}

export default App
