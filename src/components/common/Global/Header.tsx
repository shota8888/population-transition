import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
`

const Title = styled.h1`
  font-size: 1.5em;
`

export const Header = (): JSX.Element => {
  return (
    <div>
      <Container>
        <Title>都道府県別の総人口推移グラフ</Title>
      </Container>
    </div>
  )
}
