import React from 'react'
import { Prefectures } from '../../types/Prefectures'
import { CheckBox } from '../common/Forms/CheckBox'

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
    <div>
      {items.length &&
        items.map((item, i) => (
          <div key={item.prefName}>
            <CheckBox
              item={{ id: item.prefCode.toString(), name: item.prefName }}
              checked={selected[i]}
              onChange={(e) => onChangeSelection(e, i)}
            />
          </div>
        ))}
    </div>
  )
}

export default React.memo(PrefecturesList)
