import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Register } from './pages/register';
import { Home } from './pages/home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Route>,
  ),
);
