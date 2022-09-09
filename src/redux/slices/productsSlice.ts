import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { axiosGetAllProducts } from "../../api";
import { ProductType } from "../../models";

interface fetchProductsResponse {
  status: string,
  error: any,
  products: ProductType[]
}

const initialState = {
  status: 'idle',
  error: '',
  products: []
} as fetchProductsResponse;

export const fetchProducts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axiosGetAllProducts();
    return response.data.products
})

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    getAllProducts: (state,action) => {
      console.log(state);
    },
    deleteProduct: (state,action) => {
      const index = state.products.findIndex((product) => product._id === action.payload._id);
      console.log(index);
      state.products.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending,(state,action) => {
      state.status = 'loading';
      state.error = '';
    }).addCase(fetchProducts.fulfilled,(state,action)=>{
      state.status = 'successfull';
      state.error = '';
      state.products = action.payload;
    }).addCase(fetchProducts.rejected,(state,action)=>{
      state.status = 'failed';
      state.error = action.error.message
    })
  }
})
export const {deleteProduct} = productsSlice.actions;
export default productsSlice.reducer;