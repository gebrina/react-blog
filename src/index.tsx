import React from 'react';
import ReactDOM from 'react-dom/client';
import { BlogContextProvider } from './context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import App from './App';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();
const rootElement =
  document.getElementById('root') || document.createElement('div');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BlogContextProvider>
        <ToastContainer />
        <App />
      </BlogContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
