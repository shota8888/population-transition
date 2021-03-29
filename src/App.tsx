import React from 'react'
import { Header } from './components/Header/Header'
import { GlobalStyle } from './styles/global'

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
      </div>
    </>
  )
}

export default App
