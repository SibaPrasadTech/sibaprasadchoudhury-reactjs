import { AddProductType, ProductType } from "../models";

const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpYmFwcmFzYWRjaG91ZGh1cnkwMTRAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL1NpYmFQcmFzYWRUZWNoIiwiaWF0IjoxNjYyNjUxMDUwLCJleHAiOjE2NjMwODMwNTB9.W0IxP343I551bJYXrDQdx2PJnzCzmiuyeX5g1OT-xnA';

export const upayClientInstance = axios.create({
  baseURL: ' https://upayments-studycase-api.herokuapp.com/api',
  timeout: 6000,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
});

export const axiosGetAllProducts = async () => {
  const response = await upayClientInstance.get("/products");
  return response;
}

export const axiosGetProductById = async (id: string) => {
  const response = await upayClientInstance.get(`/products/${id}`);
  return response;
}

export const axiosGetAllCategories = async () => {
  const response = await upayClientInstance.get("/categories");
  return response;
}

export const axiosGetCategoryById = async (id: string) => {
  const response = await upayClientInstance.get(`/categories/${id}`);
  return response;
}

export const axiosAddProduct = async (product: AddProductType) => {
  // `/products`,{timeout: 6000}
  const response = await upayClientInstance.post('/products',product);
  return response;
}

