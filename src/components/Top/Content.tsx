import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useFetch } from '../../hooks/useFetch'
import media from '../../styles/mediaqueries'
import { Population } from '../../types/Population'
import { Prefectures } from '../../types/Prefectures'
import { SimpleButton } from '../common/Buttons/SimpleButton'
import { PopChartData, PopulationChart } from '../common/Chart/PopulationChart'
import { BottomModal } from '../common/Modal/BottomModal'
import PrefecturesList from './PrefecturesList'

const MainContainer = styled.div`
  padding: 1em;
`

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

type Props = {
  items: Prefectures['result']
}

export const Content = ({ items }: Props): JSX.Element => {
  const initialData: Population = {
    message: null,
    result: {
      boundaryYear: 0,
      data: [],
    },
  }
  const url = '/api/v1/population/composition/perYear?cityCode=-&prefCode=1'

  const { state, fetchData } = useFetch<Population>(initialData, url)

  const [selected, setSelected] = useState<boolean[]>(Array(47).fill(false))
  const [targetPref, setTargetPref] = useState('')
  const [populationData, setPopulationData] = useState<PopChartData>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleChangeSelection = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      setSelected((checks) => checks.map((c, i) => (i === index ? !c : c)))
      setTargetPref(e.target.name)

      if (e.target.checked) {
        const url = `/api/v1/population/composition/perYear?cityCode=-&prefCode=${e.target.id}`
        fetchData(url)
      } else {
        populationData.map((d) => delete d[e.target.name])
      }
    },
    [fetchData, populationData]
  )

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (state.data.result.data.length) {
      if (!populationData.length) {
        const tmp: PopChartData = state.data.result.data[0].data.map((d) => ({
          year: d.year,
        }))
        setPopulationData(tmp)
      } else {
        const arr = state.data.result.data[0].data.map((d) => ({
          [targetPref]: d.value,
        }))
        const popData = populationData.map((d, i) =>
          Object.assign({}, d, arr[i])
        )
        setPopulationData(popData)
      }
    }
  }, [state])

  return (
    <>
      <div>
        <div>
          <SimpleButton label={'都道府県を選択'} onClick={handleOpenModal} />
        </div>
        <BottomModal isOpen={isOpen} onCloseModal={handleCloseModal}>
          <div>
            <PrefecturesList
              items={items}
              selected={selected}
              onChangeSelection={handleChangeSelection}
            />
          </div>
        </BottomModal>
      </div>
      <MainContainer>
        <ListContainer>
          <PrefecturesList
            items={items}
            selected={selected}
            onChangeSelection={handleChangeSelection}
          />
        </ListContainer>
        <ChartContainer>
          <PopulationChart data={populationData} />
        </ChartContainer>
      </MainContainer>
    </>
  )
}
