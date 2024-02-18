import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom' 
import Layout from './Layout'
import { Feed , Login , Register} from './pages'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}  >
      <Route path='/feed' element={<Feed/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Route>
  ),
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
