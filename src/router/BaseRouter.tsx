import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { CommonError } from '../components/pages/CommonError';
import { StepInput } from '../components/pages/StepInput';
import { StepConfirm } from '../components/pages/StepConfirm';
import { StepComplete } from '../components/pages/StepComplete';
import { PDF } from '../components/pages/PDF';
import { Page404 } from '../components/pages/Page404';

export const BaseRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<StepInput />} />
      <Route path="/confirm" element={<StepConfirm />}  errorElement={<CommonError />}/>
      <Route path="/complete" element={<StepComplete />} />
      <Route path="/pdf" element={<PDF />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
)
