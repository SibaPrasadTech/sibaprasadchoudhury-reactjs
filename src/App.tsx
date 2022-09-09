import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Favorites from './pages/Favorites'
const App:React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
    </Routes>
  );
}

export default App;
