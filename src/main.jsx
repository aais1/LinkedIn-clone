/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider , Navigate } from 'react-router-dom';
import Layout from './Layout';
import { Feed, Login, Register , Jobs , NewJob } from './pages';
import { Provider } from 'react-redux';
import store from './features/store/store.js';
import ProtectedRoute from './ProtectedRoute.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Use the protected route for /feed */}
        <Route
          path="/feed"
          element={
        <ProtectedRoute>
          <Feed />
        </ProtectedRoute>
      }
      />

      <Route
      path="/jobs"
      element={
      <ProtectedRoute>
        <Jobs/>
      </ProtectedRoute>
      }
  />

    <Route
      path="/list-job"
      element={
      <ProtectedRoute>
        <NewJob/>
      </ProtectedRoute>
      }
  />

   
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
