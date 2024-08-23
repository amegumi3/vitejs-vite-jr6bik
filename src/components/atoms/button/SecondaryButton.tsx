import { FC, memo, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => void
  children: ReactNode
  disabled?: boolean
};

export const SecondaryButton: FC<Props> = memo((props) => {
  const { onClick, children, disabled = false } = props
  return (
    <SButton onClick={onClick} disabled={disabled}>
      {children}
    </SButton>
  )
})

const SButton = styled.button`
  padding: 20px 45px;
  margin-bottom: 15px;
  border-color: #FF755B;
  background-color: white;
  color: #FF755B;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    border-color: #dcdcdc;
    background-color: #dcdcdc;
    &:hover {
      opacity: 1;
    }
  }
`
