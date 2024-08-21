import { FC } from 'react';
import { HeaderFooter } from '../templates/HeaderFooter';
import styled from 'styled-components';
import { FaFortAwesome } from 'react-icons/fa';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useNavigate } from 'react-router-dom';

export const StepComplete: FC = () => {
  const navigate = useNavigate();
  return (
    <HeaderFooter>
      <SContent>
        <STitleArea>
          <h1>Complete</h1>
          <p>〜　入力が完了しました　〜</p>
        </STitleArea>
        <SCompleteImg>
          <FaFortAwesome />
        </SCompleteImg>
        <SecondaryButton onClick={() => {}}>入力内容を出力する</SecondaryButton>
        <br />
        <PrimaryButton onClick={() => navigate('/')}>
          入力フォームに戻る
        </PrimaryButton>
      </SContent>
    </HeaderFooter>
  );
};

const SContent = styled.div`
　　　display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 5px;
  }
`;
const SCompleteImg = styled.div`
  font-size: 130px;
  padding: 10px;
`;
const STitleArea = styled.div`
  
`;
