import React from 'react'
import './App.css';
import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import Navbar from './Components/Navbar';
import Chatbot from './Components/Chatbot';
import { Routes,BrowserRouter,Route}from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
  <Navbar/>
  <Chatbot/>
  <Routes>
   
   <Route path='/' element={<Home />} />
   
   <Route path='/contact' element={<Contact />} />
   
 </Routes>
 
  
  
  
  
 
  </BrowserRouter>
  );
}


export default App

