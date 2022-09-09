import { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosGetAllProducts } from "../api";
import { ProductType } from "../models";
import ProductItem from "./ProductItem";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products:React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      if (products.length > 0){return}
      try {
        const res = await axiosGetAllProducts();
        console.log(res);
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <Container>
        {products.map( (prod:ProductType)=>{
          return <ProductItem key={prod._id} pr={prod}></ProductItem>
        })}
    </Container>
  );
};

export default Products;
