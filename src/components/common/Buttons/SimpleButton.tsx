import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 11em;
  padding: 0.5em 0;
  font-size: 1.1em;
  cursor: pointer;
  outline: none;
  border: 1px solid ${(props) => props.theme.palette.border.light};
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 22px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 9%), 0px 2px 6px 0px rgb(0 0 0 / 10%),
    0px 1px 2px 0px rgb(0 0 0 / 11%);
`

type Props = {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const SimpleButton = ({ label, onClick }: Props): JSX.Element => {
  return <Button onClick={onClick}>{label}</Button>
}
