import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 1.8em;
  margin-bottom: 1em;
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
  top: -0.125em;
  left: 0;
  height: 1.25em;
  width: 1.25em;
  border: 1px solid ${(props) => props.theme.palette.border.main};

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    left: 0.5em;
    top: 0.25em;
    width: 0.18em;
    height: 0.5em;
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
