import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Prefectures } from '../../types/Prefectures'
import { PopChartData, PopulationChart } from '../common/Chart/PopulationChart'
import PrefecturesList from './PrefecturesList'

const ChartContainer = styled.div`
  width: 100%;
  height: 500px;
`

const data: PopChartData = []

type Props = {
  items: Prefectures['result']
}

export const Content = ({ items }: Props): JSX.Element => {
  const [selected, setSelected] = useState<boolean[]>(Array(47).fill(false))

  const handleChangeSelection = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      setSelected((checks) => checks.map((c, i) => (i === index ? !c : c)))
    },
    []
  )

  return (
    <div>
      <div>
        <PrefecturesList
          items={items}
          selected={selected}
          onChangeSelection={handleChangeSelection}
        />
      </div>
      <ChartContainer>
        <PopulationChart data={data} />
      </ChartContainer>
    </div>
  )
}
