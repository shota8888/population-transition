import React from 'react'
import { Header } from './components/Header/Header'
import { Content } from './components/Top/Content'
import { useFetch } from './hooks/useFetch'
import { GlobalStyle } from './styles/global'
import { Prefectures } from './types/Prefectures'

const App = (): JSX.Element => {
  const initialData = {
    message: null,
    result: [],
  }
  const url = '/api/v1/prefectures'
  const { state } = useFetch<Prefectures>(initialData, url)

  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <Content items={state.data.result} />
      </div>
    </>
  )
}

export default App
