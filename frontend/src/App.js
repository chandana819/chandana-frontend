
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Signin } from './Components/singin/signin/signin';
import { Signup } from './Components/singin/signup/signup';
import { StudentData } from './Components/singin/studentdata/studentdata';
import { Forgotpage } from './Components/singin/forgotpassword/forgotpassword';
import React from 'react';

function App() {
  return (
    <div className="App">

      <>
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/student' element={<StudentData/>}/>
        <Route path='/forgotpage' element={<Forgotpage/>}/>
      </Routes>
      </BrowserRouter>
      </>
    </div>
    
  );
}

export default App;
