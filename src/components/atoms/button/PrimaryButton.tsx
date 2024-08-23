import { FC, memo, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => void
  children: ReactNode
  disabled?: boolean
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const { onClick, children, disabled = false } = props
  return (
    <SButton onClick={onClick} disabled={disabled}>
      {children}
    </SButton>
  )
})

const SButton = styled.button`
  margin-bottom: 15px;
  padding: 20px 45px;
  border-color: #FF755B;
  background-color: #FF755B;
  color: white;

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
