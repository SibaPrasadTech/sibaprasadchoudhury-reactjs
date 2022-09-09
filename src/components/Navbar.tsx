import React from 'react';
import styled from "styled-components";
// import {Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Favorite} from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive";
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})};
`
const Wrapper = styled.div`
  padding: 0px 20px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "0px 10px 0px 10px", marginRight: "2px"})};
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  ${mobile({display: "none"})};
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({padding: "2px", marginLeft: "5px"})}
`
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile( {width: "50px"})};
`
const Logo = styled.h2`
  font-weight: bold;
  ${mobile({fontSize: "18px"})}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center"})}
`
const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`
function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>
          <Link to="/">
          <Logo>UPAYMENTS.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
          <Link to="/new-product">
              Add Product
          </Link>
          </MenuItem>
          <MenuItem>
          <Link to="/favorites">
          <div>Favorites</div>
          </Link>
          <Link to="/favorites">
            <Favorite/>
          </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar