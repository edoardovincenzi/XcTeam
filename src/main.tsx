import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router.tsx';
import WrapperApp from './WrapperApp.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <WrapperApp>
        <RouterProvider router={router} />
      </WrapperApp>
    </RecoilRoot>
  </React.StrictMode>
);
