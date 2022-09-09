import { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosGetAllProducts } from "../api";
import { ProductType } from "../models";
import { fetchProducts } from "../redux/slices/productsSlice";
import ProductItem from "./ProductItem";
import {useDispatch,useSelector} from 'react-redux'
import { RootState,AppDispatch } from "../redux/store";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products:React.FC = () => {
  // const [products, setProducts] = useState<ProductType[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state:RootState) => state.productsReducer.products);
  //fetchProducts
  useEffect(() => {

    dispatch(fetchProducts());
  }, [products]);

  return (
    <Container>
        {products.map( (prod:ProductType)=>{
          return <ProductItem key={prod._id} pr={prod}></ProductItem>
        })}
    </Container>
  );
};

export default Products;
