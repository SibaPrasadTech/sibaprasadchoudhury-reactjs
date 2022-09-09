import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Category } from '../models'
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 10vh;
  position: relative;
  background-color: #dcffff;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
` 
const Title = styled.div`
  color: black;
  margin-bottom: 3px;
`
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Button = styled.button`
  background-color: white;
  border: none;
  padding: 3px;
  color: grey;
  font-weight: 600;
  cursor: pointer;
`
interface Props extends React.HTMLProps<HTMLDivElement>{
  key: string,
  cat: Category
} 
const CategoryItem:React.FC<Props> = (props:Props) => {
  //console.log(props.cat);
  return (
    <Container>
      <Link to={`/products/${props.cat.name}`}>
      <Image src={props.name} alt={props.name}/>
      <Info>
        {/* <Title>{props.cat.name}</Title> */}
        <Button>{props.cat.name}</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem