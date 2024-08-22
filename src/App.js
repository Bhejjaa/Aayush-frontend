import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Verify from './pages/Verify';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import SortingExample from './pages/SortingExample';

const App = () => {
  return  (
    <div>
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/tutorial' element={<SortingExample />}/>
          <Route path='/forget-password' element={<ForgotPassword />}/>
          <Route path='/verify/:email' element={<Verify />}/>
          <Route path='/new-password/:email' element={<ChangePassword />}/>
        
        </Routes>
      </BrowserRouter>
     
  
        
      </>
    </div>
  )
}

export default App