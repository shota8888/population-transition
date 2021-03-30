import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Prefectures } from '../../types/Prefectures'
import { PopChartData, PopulationChart } from '../common/Chart/PopulationChart'
import PrefecturesList from './PrefecturesList'

const ListContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 2em auto;
  padding: 1em 0.5em;
  border: 1px solid ${(props) => props.theme.palette.border.light};
  box-shadow: 0px 8px 16px -2px rgba(10 10 10 / 10%),
    0px -15px 25px 0px rgba(10 10 10 / 2%);
`

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
      <ListContainer>
        <PrefecturesList
          items={items}
          selected={selected}
          onChangeSelection={handleChangeSelection}
        />
      </ListContainer>
      <ChartContainer>
        <PopulationChart data={data} />
      </ChartContainer>
    </div>
  )
}
