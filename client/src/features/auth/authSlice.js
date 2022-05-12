import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "/api/v1"

//user from localstorage
const user = JSON.parse(localStorage.getItem("user"))

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/sign-up`, data)
      return response.data
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

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, data)
      localStorage.setItem("user", JSON.stringify(response.data.data))
      return response.data
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

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    await localStorage.removeItem("user")
  }
)

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
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false
      state.user = action.payload.data
    },
    [login.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.user = null
    },
    [register.pending]: (state, action) => {
      state.auth_res_loading = true
    },
    [register.fulfilled]: (state, action) => {
      state.auth_res_loading = false
      state.auth_res = action.payload
    },
    [register.rejected]: (state, action) => {
      state.auth_res_loading = false
      state.auth_res_error = action.payload
      state.auth_res = null
    },
    [logout.fulfilled]: (state, action) => {
      state.user = null
    },
  },
})

export const { reset } = authSlice.actions

export default authSlice.reducer
