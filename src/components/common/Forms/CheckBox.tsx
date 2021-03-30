import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
`

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

const Indicator = styled.div`
  position: absolute;
  top: -2px;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid ${(props) => props.theme.palette.border.main};

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid ${(props) => props.theme.palette.primary};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

type Props = {
  item: { id: string; name: string }
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index?: number) => void
}

export const CheckBox = ({ item, checked, onChange }: Props): JSX.Element => {
  return (
    <div>
      <Label html-for={item.id.toString()}>
        <Input
          type="checkbox"
          id={item.id.toString()}
          name={item.name}
          checked={checked}
          onChange={onChange}
        />
        {item.name}
        <Indicator />
      </Label>
    </div>
  )
}
