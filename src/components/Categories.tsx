import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { axiosGetAllCategories } from '../api';
import { Category } from '../models';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column"})};
`

const Categories:React.FC = () => {
  const [categories,setCategories] = useState<Category[]>([]);
  const allCategory: Category = {
     _id : "0",
  name: "All",
  updatedAt: "",
  createdAt: "",
  _v: 1
  }
  useEffect(()=>{
    let getCategories = async () => {
      if(categories.length > 0) return 
      const res = await axiosGetAllCategories();
      console.log(res.data);
      setCategories(res.data.categories);
    }
    getCategories()
  },[])

  return (
    <Container>
      <CategoryItem key={allCategory._id} cat={allCategory} />
      {categories?.map((category:Category) => {
        return <CategoryItem key={category._id} cat={category} />
      })}
    </Container>
  )
}

export default Categories