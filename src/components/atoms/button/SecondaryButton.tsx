import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
};

export const SecondaryButton: FC<Props> = memo((props) => {
  const { onClick, children, disabled = false } = props;
  return (
    <>
      <SButton onClick={onClick} disabled={disabled}>
        {children}
      </SButton>
    </>
  );
});

const SButton = styled.button`
  background-color: white;
  padding: 20px 45px;
  color: #FF755B;
  border-color: #FF755B;
  margin-bottom: 5px;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: #dcdcdc;
    border-color: #dcdcdc;
    &:hover {
      opacity: 1;
    }
  }
`;
