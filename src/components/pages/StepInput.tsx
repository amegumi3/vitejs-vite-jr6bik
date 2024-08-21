import { memo, FC, ChangeEvent, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { HeaderFooter } from '../templates/HeaderFooter';
import { TitleContent } from '../molecules/TitleContent';
import { TitleText } from '../molecules/TitleText';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

type InputForm = {
  name?: string;
  nameKana?: string;
  tel?: number | string;
  mail?: string;
};

export const StepInput: FC = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [name, setName] = useState('');
  const [nameKana, setNameKana] = useState('');
  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [errorName, setErrorName] = useState<null | string>(null);
  const [errorNameKana, setErrorNameKana] = useState<null | string>(null);
  const [errorTel, setErrorTel] = useState<null | string>(null);
  const [inputForm, setInputForm] = useState<InputForm>({});
  const prevInput = location?.state?.info ?? null;

  useEffect(() => {
    const input = prevInput;
    if (input) {
      setInputForm(input);
      input.name && setName(input.name);
      input.nameKana && setNameKana(input.nameKana);
      input.tel && setTel(input.tel);
      input.mail && setMail(input.mail);
    }
  }, []);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setErrorName(null);
    if (value === '') {
      setErrorName('名前を入力してください');
    } else if (/^\s*$/.test(value) || /\d/.test(value)) {
      setErrorName('正しく入力してください');
    } else {
      setInputForm((prev) => ({ ...prev, name: value }));
    }
  };

  const onChangeNameKana = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameKana(value);
    setErrorNameKana(null);
    if (value === '') {
      setErrorNameKana('値を入力してください');
    } else if (!/^[\u30A0-\u30FF]+$/.test(value)) {
      setErrorNameKana('カタカナで入力してください');
    } else {
      setInputForm((prev) => ({ ...prev, nameKana: value }));
    }
  };

  const onChangeTel = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTel(value);
    setErrorTel(null);
    if (value === '') {
      setErrorTel('電話番号を入力してください');
    } else if (!/^[0-9]+$/.test(value)) {
      setErrorTel('正しく入力してください');
    } else {
      setInputForm((prev) => ({ ...prev, tel: value }));
    }
  };

  const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMail(value);
    setInputForm((prev) => ({ ...prev, mail: value }));
  };

  useEffect(() => {
    const error = errorName || errorNameKana || errorTel;
    const requirement = inputForm.name && inputForm.nameKana && inputForm.tel;
    requirement && !error
      ? setIsButtonDisable(false)
      : setIsButtonDisable(true);
  }, [inputForm, errorName, errorNameKana, errorTel]);

  const onClickNextStp = () => {
    navigate('/confirm', { state: { inputForm } });
  };
  return (
    <HeaderFooter>
      <TitleContent title="入力フォーム">
        <SForm>
          <TitleText title="氏名" notion={errorName}>
            <SInput onChange={onChangeName} value={name} />
          </TitleText>
          <TitleText title="氏名（フリガナ）" notion={errorNameKana}>
            <SInput onChange={onChangeNameKana} value={nameKana} />
          </TitleText>
          <TitleText title="電話番号" notion={errorTel}>
            <SInput onChange={onChangeTel} value={tel} />
          </TitleText>
          <TitleText title="メールアドレス">
            <SInput onChange={onChangeMail} value={mail} />
          </TitleText>
          <SButtonArea>
            <PrimaryButton onClick={onClickNextStp} disabled={isButtonDisable}>
              入力内容を確認
            </PrimaryButton>
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

const SButtonArea = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const SInput = styled.input`
  height: 1.8rem;
  &:focus {
    outline: none;
  }
`;
