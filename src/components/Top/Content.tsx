import React from 'react'
import styled from 'styled-components'
import { PopChartData, PopulationChart } from '../common/Chart/PopulationChart'

const ChartContainer = styled.div`
  width: 100%;
  height: 500px;
`

const data: PopChartData = []

export const Content = (): JSX.Element => {
  return (
    <div>
      <ChartContainer>
        <PopulationChart data={data} />
      </ChartContainer>
    </div>
  )
}
