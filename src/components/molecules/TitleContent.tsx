import { memo, FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Header } from '../atoms/layout/Header'

type Props = {
  title?: string
  children: ReactNode
}

export const TitleContent: FC<Props> = memo((props) => {
  const { title = null, children } = props;
  return (
    <SContent>
      <Header />
      {title && (
        <STitle>
          <h1>{title}</h1>
        </STitle>
      )}
      {children}
    </SContent>
  )
})

const SContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  text-align: center;
`

const STitle = styled.div`
  padding-top: 10px; 
  padding-bottom: 20px; 
  font-weight: 900;
`
