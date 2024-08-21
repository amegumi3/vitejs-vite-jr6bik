import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
};

export const PrimaryButton: FC<Props> = memo((props) => {
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
  background-color: #FF755B;
  padding: 20px 45px;
  color: white;
  border-color: #FF755B;
  margin-bottom: 15px;

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
