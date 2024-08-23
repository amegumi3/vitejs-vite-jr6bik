import { memo, FC, ChangeEvent, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { TitleContent } from '../molecules/TitleContent'
import { TitleText } from '../molecules/TitleText'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { InputInfoContext } from '../../provider/InputInfoProvider'
import { InputData } from '../../types/input'
import { useValidation } from '../../hooks/useValidation'

export const StepInput: FC = memo(() => {
  const navigate = useNavigate()
  const { inputInfo, setInputInfo } = useContext(InputInfoContext)
  const { checkRequired, checkText, checkTextKana, checkTel } = useValidation()
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const [name, setName] = useState('')
  const [nameKana, setNameKana] = useState('')
  const [tel, setTel] = useState<string | number>('')
  const [mail, setMail] = useState('')
  const [errorName, setErrorName] = useState<null | string>(null)
  const [errorNameKana, setErrorNameKana] = useState<null | string>(null)
  const [errorTel, setErrorTel] = useState<null | string>(null)
  const [inputForm, setInputForm] = useState<InputData>({})
  const prevInput = inputInfo

  useEffect(() => {
    const input = prevInput
    if (input) {
      setInputForm(input)
      input.name && setName(input?.name)
      input.nameKana && setNameKana(input?.nameKana)
      input.tel && setTel(input?.tel)
      input.mail && setMail(input?.mail)
    }
  }, [])

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string
    setName(value)
    setErrorName(null)
    const error = checkRequired(value) || checkText(value)
    if (error) {
      setErrorName(error)
    } else {
      setInputForm((prev) => ({ ...prev, name: value }))
    }
  }

  const onChangeNameKana = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNameKana(value)
    setErrorNameKana(null)
    const error = checkRequired(value) || checkTextKana(value)
    if (error) {
      setErrorNameKana(error)
    } else {
      setInputForm((prev) => ({ ...prev, nameKana: value }))
    }
  }

  const onChangeTel = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTel(value)
    setErrorTel(null)
    const error = checkRequired(value) || checkTel(value)
    if (error) {
      setErrorTel(error)
    } else {
      setInputForm((prev) => ({ ...prev, tel: value as unknown as number }))
    }
  }

  const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMail(value)
    setInputForm((prev) => ({ ...prev, mail: value }))
  }

  useEffect(() => {
    const error = errorName || errorNameKana || errorTel
    const requirement = inputForm.name && inputForm.nameKana && inputForm.tel
    requirement && !error
      ? setIsButtonDisable(false)
      : setIsButtonDisable(true)
  }, [inputForm, errorName, errorNameKana, errorTel])

  const onClickNextStp = () => {
    setInputInfo(inputForm)
    navigate('/confirm', { state: { inputForm } })
  }
  return (
    <TitleContent title="入力フォーム">
      <SForm>
        <TitleText title="氏名" required={true} notion={errorName}>
          <SInput onChange={onChangeName} value={name} />
        </TitleText>
        <TitleText title="氏名（フリガナ）" required={true} notion={errorNameKana}>
          <SInput onChange={onChangeNameKana} value={nameKana} />
        </TitleText>
        <TitleText title="電話番号" required={true} notion={errorTel}>
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
  )
})

const SForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SButtonArea = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`

const SInput = styled.input`
  height: 1.8rem;

  &:focus {
    outline: none;
  }
`
