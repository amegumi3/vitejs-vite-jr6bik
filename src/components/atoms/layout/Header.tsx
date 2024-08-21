import { memo, FC } from 'react';
import styled from 'styled-components';

export const Header: FC = memo(() => {
  return (
    <SHeader>
      <h1>Input Form</h1>
    </SHeader>
  );
});

const SHeader = styled.header`
  background-color: #FCC1A7;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
  padding: 8px 15px;
  border-weight: 900;
  height: 50px;
`;
