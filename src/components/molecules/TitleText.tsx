import { memo, FC, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  notion?: null | string;
  children: ReactNode;
};

export const TitleText: FC<Props> = memo((props) => {
  const { title, notion = null, children } = props;
  return (
    <STitleText>
      <STitleArea>
        <STitle>
          {title}
          <STitleBadge>必須</STitleBadge>
        </STitle>
        {notion && <SNotion>{notion}</SNotion>}
      </STitleArea>
      {children}
    </STitleText>
  );
});

const STitleText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  
  input {
    width: 70%;
  }
`;

const STitleArea = styled.div`
  width: 72%;
  margin-bottom: 10px;
  p {
    text-align: start;
    margin-bottom: 3px;
  }
`;

const SNotion = styled.p`
  color: red;
  font-weight: 400;
  margin-top: 3px;
  font-size: 0.8rem;
`;

const STitle = styled.p`
  font-weight: 900;
`;

const STitleBadge = styled.span`
  display: inline-block;
  background-color: red;
  padding: 3px 7px;
  font-size: 0.6rem;
  margin-left: 8px;
  color: white;
  border-radius: 4px;
`;
