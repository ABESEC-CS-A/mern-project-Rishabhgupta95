import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Help from './Component/Help';
import Home from './Component/Home';
import About from './Component/about';
import ViewCart from './Component/ViewCart';
import Vieworder from './Component/Vieworder';

function App() {
  const [count, setCount] = useState(0);

  return (
     <div>
       <BrowserRouter>
         <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/viewcart' element={<ViewCart/>} />
            <Route path='/vieworder' element={<Vieworder/>} />
            <Route path='/help' element={<Help />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;