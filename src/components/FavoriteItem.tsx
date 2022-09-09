import styled from 'styled-components'
import React from 'react'
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { FavoritesType, ProductType } from '../models';

const Info = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: rgba(0,0,0,0.2);
  cursor: pointer;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1ecec;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  /* background-color: grey; */
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  width: 75%;
  z-index: 2;
`;

interface Props extends React.HTMLProps<HTMLDivElement>{
  key: string,
  pr: ProductType
};

const FavoriteItem: React.FC<Props>  = (props: Props) => {
  return (
    <Container>
      <Circle />
      <Image src={props.pr.avatar} alt="IMAGE" />
      <Info>
        {/* <Icon>
          <ShoppingCartOutlined />
        </Icon> */}
        <Link to={`/product/${props.pr._id}`}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  )
}

export default FavoriteItem;