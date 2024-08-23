import { FC, useContext } from 'react'
import styled from 'styled-components'
import { FaFortAwesome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { InputInfoContext } from '../../provider/InputInfoProvider'

export const StepComplete: FC = () => {
  const { setInputInfo } = useContext(InputInfoContext)

  const navigate = useNavigate()
  const onClickTop = () => {
    setInputInfo({})
    navigate('/')
  }

  return (
    <SContent>
      <div>
        <h1>Complete</h1>
        <p>〜　入力が完了しました　〜</p>
      </div>
      <SCompleteImg>
        <FaFortAwesome />
      </SCompleteImg>
      <SecondaryButton onClick={() => navigate('/pdf')}>入力内容を出力する</SecondaryButton>
      <br />
      <PrimaryButton onClick={onClickTop}>
        入力フォームに戻る
      </PrimaryButton>
    </SContent>
  )
}

const SContent = styled.div`
  flex-direction: column;
  text-align: center;
  h1 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 5px:
  }
`
const SCompleteImg = styled.div`
  font-size: 130px;
  padding: 30px 10px 30px;
`
