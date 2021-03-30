import React from 'react'
import styled, { keyframes } from 'styled-components'

const fromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
     transform: translateY(0);
  }
`
const toBottom = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
     transform: translateY(30px);
  }
`

const Container = styled.div<{ isOpen: boolean }>`
  transition: opacity 0.3s, visibility 0.3s;
  visibility: ${(props) => (!props.isOpen ? 'hidden' : 'initial')};
  opacity: ${(props) => (!props.isOpen ? 0 : 1)};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.bg.dark};

  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const IconButton = styled.div`
  text-align: right;
  font-size: 1.25em;
  padding: 0 1em;
  cursor: pointer;
`

const CloseIcon = styled.div`
  font-size: 1.5em;
`

const MainContainer = styled.div<{ isOpen: boolean }>`
  z-index: 2;
  width: 100%;
  height: 80%;
  padding: 1em;
  background: ${(props) => props.theme.palette.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  animation-name: ${(props) => (props.isOpen ? fromBottom : toBottom)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`

type Props = {
  isOpen: boolean
  onCloseModal: () => void
}

export const BottomModal: React.FC<Props> = ({
  children,
  isOpen,
  onCloseModal,
}) => {
  return (
    <Container isOpen={isOpen}>
      <MainContainer isOpen={isOpen}>
        <IconButton onClick={onCloseModal}>
          <CloseIcon>×</CloseIcon>
        </IconButton>
        {children}
      </MainContainer>
    </Container>
  )
}
