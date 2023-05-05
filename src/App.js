import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './frondend/login'
import Home from './frondend/home'
import Departments from './frondend/Departments'
import Employee from './frondend/Employee'
import Heads from './frondend/Heads'
function App() {
  return (
    <div>
    
 


    <BrowserRouter> 
      <Routes> 
      

        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/departments' element={<Departments/>}/>
       <Route path='/employee' element={<Employee/>}/>
       <Route path='/heads' element={<Heads/>}/>
        </Routes>
        </BrowserRouter> 






    </div>
  )
}

export default App
