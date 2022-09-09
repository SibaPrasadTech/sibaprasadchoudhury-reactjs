import Navbar from "../components/Navbar";
import "./NewProduct.css";
import { useState, useEffect, useReducer} from "react";
import {axiosAddProduct, axiosGetAllCategories } from '../api/index';
import { Category } from "../models";
import {AddProductType} from '../models/index';
import Announcements from "../components/Announcements";
import { useNavigate } from "react-router-dom";

// const initialState:AddProductType = { 
//   name: "",
//   avatar: "",
//   category: "",
//   developerEmail:"",
//   description: "",
//   price: 0
// };

// type Action = {
//   type: string,
//   payload: AddProductType
// }

// const reducer = (state:AddProductType, action:Action):AddProductType => {
//   const {type,payload} = action;
//   const {name,avatar,category,developerEmail,description,price} = payload;
//   if (type === 'addProduct') {
//     return {name,avatar,category,developerEmail,description,price: price};
//     }
//     else return initialState
// };

export default function NewProduct() {
  // const [state, dispatch] = useReducer(reducer,initialState);
  const [announcement,setAnnouncement] = useState(false);
  const [name, setName] = useState('Bean Bag');
  const [description, setDescription] = useState('Great Bin Bag');
  const [price, setPrice] = useState('123');
  const [developerEmail, setDeveloperEmail] = useState('sibaprasadchoudhury014@gmail.com');
  const [avatar, setAvatar] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iNPr5MJoF3XYsEMJ40hafkmCWuGfEz5SoQ&usqp=CAU');
  const [category, setCategory] = useState('Furniture');
  const [categories,setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();
  
  const addProductHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    // dispatch({ type: 'addProduct', payload: {name,price:parseInt(price),description,avatar,developerEmail,category} });
    e.preventDefault();
    //console.log("HIHHIHIHIHIH");
    try{
      const res = await axiosAddProduct({name,price:parseInt(price),description,avatar,developerEmail,category});
      console.log(res.data);
      setAnnouncement(true);
    }
    catch(err){
      console.log(err);
    }
    setTimeout(()=>{
      navigate("/")
    },3000)
    
  }
  
  useEffect(()=>{
    let getCategories = async () => {
      if(categories.length > 0) return 
      const res = await axiosGetAllCategories();
      console.log(res.data);
      setCategories(res.data.categories);
    }
    getCategories()
  },[]);

  return (
    <div className="container">
    {announcement ? <Announcements message="Added New Product"/> : null}
    <Navbar/>
    <div className="newProduct">
      <h1 className="addProductTitle">Add Product</h1>
      <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>addProductHandler(e)}  className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="All you know about your great product" />
        </div>
        <div className="addProductItem">
          <label>Avatar</label>
          <input value={avatar} onChange={(e)=>setAvatar(e.target.value)} type="dropdown" placeholder="Product Image URL" />
        </div>
        <div className="addProductItem">
          <label>Developer Email</label>
          <input value={developerEmail} onChange={(e)=>setDeveloperEmail(e.target.value)} type="dropdown" placeholder="sibaprasadchoudhury014@gmail.com" />
        </div>
        <button type="submit" className="addProductButton">Create</button>
      </form>
    </div>
    </div>
  );
}
