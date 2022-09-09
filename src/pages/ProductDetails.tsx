// import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
// import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosGetProductById } from "../api";
import { ProductType } from "../models";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  
`;
/* ${mobile({ padding: "10px", flexDirection: "column" })} */
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
`;
/* ${mobile({ height: "40vh" })} */

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;
/* ${mobile({ padding: "10px" })} */
const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const ProductDetails:React.FC= () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosGetProductById(id);
        console.log(res);
        console.log(res.data.product);
        setProduct(res.data.product);
      } catch { }
    };
    getProduct();
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product?.avatar} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.name}</Title>
          <Desc>{product?.description}</Desc>
          <Price>$ {product?.price}</Price>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductDetails;