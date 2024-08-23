export const useValidation = () => {
  const checkRequired = (value: string | number) =>  value === '' ? '未入力です' : false

  const checkText = (value: string) => {
    if (/^\s*$/.test(value) || /\d/.test(value)) {
      return '正しく入力してください'
    } 
    return false
  }

  const checkTextKana = (value: string) => {
    if (!/^[\u30A0-\u30FF]+$/.test(value)) {
      return 'カタカナで入力してください'
    } 
    return false
  }

  const checkTel = (value: number) => {
    const regex = /^(0[5-9]0[-(]?[0-9]{4}[-)]?[0-9]{4}|0120[-]?\d{1,3}[-]?\d{4}|050[-]?\d{4}[-]?\d{4}|0[1-9][-]?\d{1,4}[-]?\d{1,4}[-]?\d{4})*$/
    if (!regex.test(value)) {
      return '正しく入力してください'
    } 
    return false
  }   
  
  return { checkRequired, checkText, checkTextKana, checkTel }
}
