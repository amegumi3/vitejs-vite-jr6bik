import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { StepInput } from '../components/pages/StepInput';
import { StepConfirm } from '../components/pages/StepConfirm';
import { Page404 } from '../components/pages/Page404';
import { StepComplete } from '../components/pages/StepComplete';

export const BaseRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<StepInput />} />
      <Route path="/confirm" element={<StepConfirm />} />
      <Route path="/complete" element={<StepComplete />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);
