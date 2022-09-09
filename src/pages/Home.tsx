import React, { useEffect, useState } from 'react'
import { axiosGetAllProducts } from '../api';
import { ErrorResponse,ProductSResponse,ProductType } from '../models';
import Navbar from '../components/Navbar';
// import Slider from '../components/Slider';
import Products from '../components/Products';
import Categories from '../components/Categories';

const Home:React.FC = () => {
  const [error,setError] = useState<ErrorResponse>({message: "",stack: ""});
  return (
    <div>
      <Navbar/>
      {/* <Slider/> */}
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home;