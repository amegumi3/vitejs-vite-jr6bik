import './App.css';
import { RouterProvider } from 'react-router-dom';
import { BaseRouter } from './router/BaseRouter';

function App() {
  return <RouterProvider router={BaseRouter} />;
}

export default App;
