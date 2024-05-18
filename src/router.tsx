import { createBrowserRouter } from 'react-router-dom';
import SignIn from '@/pages/signIn/SignIn';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/hello-word',
    element: <div>Hello world!</div>,
  },
]);
