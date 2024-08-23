import styled from 'styled-components'
import { useRouteError } from 'react-router-dom';
import { Header } from '../atoms/layout/Header';

export const CommonError = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <SContent>エラーが発生しました</SContent>
    </>
  );
};

const SContent = styled.div`
  margin-top: 100px;
  color: red;
  text-align: center;
`
