import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom' 
import Layout from './Layout'
import { Feed , Login , Register} from './pages'
import { Provider } from 'react-redux'
import store from './features/store/store.js'
import { useUser } from './hooks/useUser.js' 


const router= createBrowserRouter(
  createRoutesFromElements(
    <>
    !useUser() ? <Route path='/' element={ <Login/>}/> : 
    <Route path="/" element={<Layout/>}  >
      <Route path='/feed' element={ <Feed/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Route>
    </>
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
