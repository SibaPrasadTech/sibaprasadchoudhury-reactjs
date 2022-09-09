import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
const App:React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
    </Routes>
  );
}

export default App;
