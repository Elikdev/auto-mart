import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


//user from localstorage
const user = JSON.parse(localStorage.getItem("user"))

export const register =  createAsyncThunk("/auth/register", async(data, thunkAPI) => {
 try {
  const {data} = axios.post("/login") 
  return data
 } catch (error) {
  const message = error
  ? error.response
    ? error.response.data
      ? error.response.data.message
        ? error.response.data.message
        : "failed to complete the request"
      : "error in sending request"
    : error.message || "error in sending request"
  : null

  return thunkAPI.rejectWithValue(message);
 }
})

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: user ? user : null,
    error: null,
    auth_res_loading: false,
    auth_res: null,
    auth_res_error: null,
  },
  reducers: {
    reset: (state) => {
      state.loading = false
      state.error = null
      state.auth_res_error = null
      state.auth_res = null
      state.auth_res_loading = false
    },
  },
  extraReducers: () => {},
})

export const { reset } = authSlice.actions

export default authSlice.reducer
