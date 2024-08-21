import { memo, FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = memo(() => {
  return (
    <SFooter>
      <p>&copy; M.Y</p>
    </SFooter>
  );
});

const SFooter = styled.header`
  background-color: #FCC1A7;
  color: #fff;
  text-align: center;
  padding: 8px 15px;
  height: 50px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;
