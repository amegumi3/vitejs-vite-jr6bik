import { memo, FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  required?: boolean 
  notion?: null | string
  children: ReactNode
};

export const TitleText: FC<Props> = memo((props) => {
  const { title, required = false, notion = null, children } = props
  return (
    <STitleText>
      <STitleArea>
        <STitle>
          {title}
          {required && <STitleBadge>必須</STitleBadge>}
        </STitle>
        {notion && <SNotion>{notion}</SNotion>}
      </STitleArea>
      {children}
    </STitleText>
  )
})

const STitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  
  input {
    width: 70%;
  }
`

const STitleArea = styled.div`
  width: 72%;
  margin-bottom: 10px;
  p {
    margin-bottom: 3px;
    text-align: start;
  }
`

const STitle = styled.p`
  font-weight: 900;
`

const STitleBadge = styled.span`
  display: inline-block;
  margin-left: 8px;
  padding: 3px 7px;
  border-radius: 4px;
  background-color: red;
  font-size: 0.6rem;
  color: white;
`

const SNotion = styled.p`
  margin-top: 3px;
  color: red;
  font-size: 0.8rem;
  font-weight: 400;
`
