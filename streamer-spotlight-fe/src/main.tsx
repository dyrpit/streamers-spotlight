import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import StreamersView from './views/StreamersView.tsx';
import StreamerDetailsView from './views/StreamerDetailsView.tsx';

import { queryClient } from './constants/query-client.ts';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/',
        element: <StreamersView />,
      },
      {
        path: '/:streamerId',
        element: <StreamerDetailsView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
