import { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosGetAllProducts } from "../api";
import { ProductType } from "../models";
import { fetchProducts } from "../redux/slices/productsSlice";
import ProductItem from "./ProductItem";
import {useDispatch,useSelector} from 'react-redux';
import { RootState, AppDispatch} from "../redux/store";
import { useLocation } from 'react-router-dom';
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products:React.FC = () => {
  const [filteredProducts,setFilteredProducts] = useState<ProductType[] | null>(null);
  const location = useLocation();
  const cat = location.search.split("=")[1];
  const appDispatch = useDispatch<AppDispatch>();
  const products = useSelector((state:RootState) => state.productsReducer.products);

  useEffect(()=>{
    console.log("Category : ",cat);
    typeof cat == "undefined" || cat == "All"  ? setFilteredProducts(products) :
    setFilteredProducts(products.filter((product:ProductType)=>{return product.category === cat}));
  },[cat,products]);

  //fetchProducts
  useEffect(() => {
    console.log("Products : ",products);
    appDispatch(fetchProducts());
  }, []);

  return (
    <Container>
        {filteredProducts?.map( (prod:ProductType)=>{
          return <ProductItem key={prod._id} pr={prod}></ProductItem>
        })}
    </Container>
  );
};

export default Products;
