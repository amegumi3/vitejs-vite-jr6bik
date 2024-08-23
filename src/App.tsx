import './App.css';
import { RouterProvider } from 'react-router-dom';
import { BaseRouter } from './router/BaseRouter';
import { InputInfoProvider } from './provider/InputInfoProvider';

function App() {
  return (
    <InputInfoProvider>
      <RouterProvider router={BaseRouter} />
    </InputInfoProvider>
  )
}

export default App;
