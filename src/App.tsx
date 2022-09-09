import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Favorites from './pages/Favorites'
import NewProduct from './pages/NewProduct';
const App:React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
      <Route path='/new-product' element={<NewProduct/>}></Route>
    </Routes>
  );
}

export default App;
