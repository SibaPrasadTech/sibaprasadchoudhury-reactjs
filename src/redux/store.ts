import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

export const store = configureStore({
  reducer: rootReducer,
});
console.log(store.getState())
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;