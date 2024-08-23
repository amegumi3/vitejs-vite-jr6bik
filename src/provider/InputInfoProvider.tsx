import {
  createContext, Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

import { InputData } from '../types/input'

export type InputInfoContextType = {
  inputInfo: InputData | null,
  setInputInfo: Dispatch<SetStateAction<InputData>>
}  

export const InputInfoContext = createContext<InputInfoContextType>({} as InputInfoContextType)

export const InputInfoProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [inputInfo, setInputInfo] = useState({})
  return (
    <InputInfoContext.Provider value={{ inputInfo, setInputInfo }}>
      {children}
    </InputInfoContext.Provider>
  );
};
