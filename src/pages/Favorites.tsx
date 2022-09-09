import React,{ useEffect, useState } from "react";
import styled from "styled-components";
import { FavoritesType, ProductType } from "../models";
import FavoriteItem from "../components/FavoriteItem";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../redux/store";
import Navbar from "../components/Navbar";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Favorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favoritesReducer.favorites);
  // const dispatch = useDispatch<AppDispatch>();
  return (
    <>
    <Navbar/>
    <Container>
      
        {favorites.length === 0 ? <div>Add your favorites products to see them here!!!</div> : null}
        {favorites.map( (prod:ProductType)=>{
          return <FavoriteItem key={prod._id} pr={prod}></FavoriteItem>
        })}
    </Container>
    </>
  );
};

export default Favorites;
