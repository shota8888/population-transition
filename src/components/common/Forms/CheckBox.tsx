import React from 'react'

type Props = {
  item: { id: string; name: string }
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index?: number) => void
}

export const CheckBox = ({ item, checked, onChange }: Props): JSX.Element => {
  return (
    <div>
      <label html-for={item.id.toString()}>
        <input
          type="checkbox"
          id={item.id.toString()}
          name={item.name}
          checked={checked}
          onChange={onChange}
        />
        {item.name}
      </label>
    </div>
  )
}
