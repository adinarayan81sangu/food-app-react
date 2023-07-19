import React from 'react';

import './App';
import ExampleUseForm from './components/ExampleUseForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Display from './components/Display';

const router = createBrowserRouter([
  { path: '/', element: <ExampleUseForm /> },
  { path: '/display', element: <Display /> }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App;
