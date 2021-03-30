import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import styled from 'styled-components'

const StyledLineChart = styled(LineChart)`
  &.recharts-wrapper {
    z-index: -1;
  }
`

export type PopChartData = {
  year: number
  [pref: string]: number
}[]

type Props = {
  data: PopChartData
}

export const PopulationChart = ({ data }: Props): JSX.Element => {
  const prefNames = data.length
    ? Object.keys(data[0]).filter((k) => k !== 'year')
    : ['']

  return (
    <ResponsiveContainer width="100%" height="100%">
      <StyledLineChart
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis width={90} />
        <Tooltip />
        <Legend />
        {prefNames.map((name, i) => (
          <Line
            key={name}
            type="monotone"
            dataKey={name}
            stroke={`hsl(${i * (360 / prefNames.length)}, 80%, 30%)`}
            activeDot={{ r: 8 }}
          />
        ))}
      </StyledLineChart>
    </ResponsiveContainer>
  )
}
