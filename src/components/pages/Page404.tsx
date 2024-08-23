import styled from 'styled-components'
import { FC } from "react"
import { Header } from '../atoms/layout/Header'

export const Page404: FC = () => {
  return (
    <>
      <Header />
      <SContent>Page Not Found</SContent>
    </>
  )
}

const SContent = styled.div`
  margin-top: 100px;
  color: red;
  text-align: center;
`