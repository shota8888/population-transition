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
      <LineChart
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
        <YAxis />
        <Tooltip />
        <Legend />
        {prefNames.map((name) => (
          <Line
            key={name}
            type="monotone"
            dataKey={name}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
