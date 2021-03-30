import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Progress } from './components/common/FeedBack/Progress'
import { Header } from './components/Header/Header'
import { Content } from './components/Top/Content'
import { useFetch } from './hooks/useFetch'
import { GlobalStyle } from './styles/global'
import { styledTheme } from './styles/theme'
import { Prefectures } from './types/Prefectures'

const App = (): JSX.Element => {
  const initialData = {
    message: null,
    result: [],
  }
  const url = '/api/v1/prefectures'
  const { state } = useFetch<Prefectures>(initialData, url)

  let content: JSX.Element = <></>
  if (state.isLoading) content = <Progress />
  else content = <Content items={state.data.result} />

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <div>
        <Header />
        {content}
      </div>
    </ThemeProvider>
  )
}

export default App
