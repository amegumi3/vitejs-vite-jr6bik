import { memo, FC, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  title?: string;
  children: ReactNode;
};

export const TitleContent: FC<Props> = memo((props) => {
  const { title = null, children } = props;
  return (
    <SContent>
      {title && (
        <STitle>
          <h1>{title}</h1>
        </STitle>
      )}
      {children}
    </SContent>
  );
});

const SContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  text-align: center;
`;

const STitle = styled.div`
  font-weight: 900;
  padding-top: 10px; 
  padding-bottom: 20px; 
`;
