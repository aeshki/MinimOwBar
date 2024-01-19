import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './global.css';

import {
  Home,
  Cats,
  Reservation,
  Carte,
  FAQ,
  Contact,
  Error404
} from '@pages';


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'nos-chatons',
        element: <Cats />
      },
      {
        path: 'reservation',
        element: <Reservation />
      },
      {
        path: 'carte',
        element: <Carte />
      },
      {
        path: 'FAQ',
        element: <FAQ />
      },
      {
        path: 'Contact',
        element: <Contact />
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);