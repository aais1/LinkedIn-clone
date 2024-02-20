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
    {/* Getting user from Redux store */}
    !useUser() ?
      <>
      <Route path='/' element={ <Login/>}/>
      <Route path="/feed" element={<Login message="You Need To Login First"/>}/>
      </> : 

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
