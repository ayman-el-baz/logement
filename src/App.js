import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Connexion from './components/registre/Connexion'
import Inscription from './components/registre/Inscription'
import ForgetPassword from './components/registre/ForgetPassword'
import NotFound from './components/NotFound'
import Home from './components/App/Home'

export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Connexion/>}/>
              <Route path='/SignIn' element={<Connexion/>}/>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/SignUp' element={<Inscription/>}/>
              <Route path='/Password/reset' element={<ForgetPassword/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
