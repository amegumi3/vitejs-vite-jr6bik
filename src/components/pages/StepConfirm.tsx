import { memo, FC, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { TitleContent } from '../molecules/TitleContent'
import { TitleText } from '../molecules/TitleText'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { InputInfoContext } from '../../provider/InputInfoProvider'

export const StepConfirm: FC = memo(() => {
  const location = useLocation()
  const navigate = useNavigate()
  const { inputInfo, setInputInfo } = useContext(InputInfoContext)
  const onClickSubmit = () => {
    const today = new Date()
    const formatedDay = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`
    const info = inputInfo
    if (info) {
      info['date'] = formatedDay
      setInputInfo(info)
    }
    navigate('/complete')
  }

  const info = location.state.inputForm;
  return (
    <TitleContent title="確認">
      <SForm>
        <TitleText title="氏名">
          <FormText>
            <p>{inputInfo?.name}</p>
          </FormText>
        </TitleText>
        <TitleText title="氏名（フリガナ）">
          <FormText>{inputInfo?.nameKana}</FormText>
        </TitleText>
        <TitleText title="電話番号">
          <FormText>{inputInfo?.tel}</FormText>
        </TitleText>
        <TitleText title="メールアドレス">
          <FormText>{inputInfo?.mail}</FormText>
        </TitleText>
        <SButtonArea>
          <SButtonInner>
            <PrimaryButton onClick={onClickSubmit}>
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
  )
})

const SForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormText = styled.div`
  display: flex;
  justify-content: start;
  width: 72%;
  font-weight: 500;
  
  p{
    text-align: start;
  }
`

const SButtonInner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  margin-bottom: 50px;

  div {
    margint-top: 40px; 
  }
`
const SButtonArea = styled.div`
  margin: 0 auto;
`
