import { memo, FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { HeaderFooter } from '../templates/HeaderFooter';
import { TitleContent } from '../molecules/TitleContent';
import { TitleText } from '../molecules/TitleText';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { SecondaryButton } from '../atoms/button/SecondaryButton';

export const StepConfirm: FC = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state.inputForm;
  return (
    <HeaderFooter>
      <TitleContent title="確認">
        <SForm>
          <TitleText title="氏名">
            <FormText>{info?.name}</FormText>
          </TitleText>
          <TitleText title="氏名（フリガナ）">
            <FormText>{info?.nameKana}</FormText>
          </TitleText>
          <TitleText title="電話番号">
            <FormText>{info?.tel}</FormText>
          </TitleText>
          <TitleText title="メールアドレス">
            <FormText>{info?.mail}</FormText>
          </TitleText>

          <SButtonArea>
            <SButtonInner>
              <PrimaryButton onClick={() => navigate('/complete')}>
                送信
              </PrimaryButton>
              <SecondaryButton
                onClick={() => navigate('/', { state: { info } })}
              >
                入力画面に戻る
              </SecondaryButton>
            </SButtonInner>
          </SButtonArea>
        </SForm>
      </TitleContent>
    </HeaderFooter>
  );
});

const SForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormText = styled.div`
  font-weight: 500;
`;

const SButtonInner = styled.div`
  margin-top: 90px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  div {
    margint-top: 40px; 
  }
`;
const SButtonArea = styled.div`
  margin: 0 auto;
`;
