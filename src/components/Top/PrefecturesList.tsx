import React from 'react'
import styled from 'styled-components'
import { Prefectures } from '../../types/Prefectures'
import { CheckBox } from '../common/Forms/CheckBox'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Block = styled.div`
  width: 101px;
  padding-right: 0.9em;
`

type Props = {
  items: Prefectures['result']
  onChangeSelection: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void
  selected: boolean[]
}

const PrefecturesList = ({
  items,
  selected,
  onChangeSelection,
}: Props): JSX.Element => {
  return (
    <Container>
      {items.length &&
        items.map((item, i) => (
          <Block key={item.prefName}>
            <CheckBox
              item={{ id: item.prefCode.toString(), name: item.prefName }}
              checked={selected[i]}
              onChange={(e) => onChangeSelection(e, i)}
            />
          </Block>
        ))}
    </Container>
  )
}

export default React.memo(PrefecturesList)
