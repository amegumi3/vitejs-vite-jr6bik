import { memo, FC } from 'react'
import styled from 'styled-components'

export const Header: FC = memo(() => {
  return (
    <SHeader>
      <h1>Input Form</h1>
    </SHeader>
  )
})

const SHeader = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 50px;
  padding: 8px 15px;
  background-color: #FCC1A7;
  color: #fff;
  text-align: center;
`
