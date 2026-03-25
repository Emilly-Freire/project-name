import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes';
import { RouterProvider } from "react-router-dom";
import UserProvider from './providers/UserProvider'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

