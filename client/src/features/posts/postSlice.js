import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = process.env.REACT_APP_API_BASE_URL

export const addNewPost = createAsyncThunk(
  "post/addNewPost",
  async (data, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      }
      const response = await axios.post(`${BASE_URL}/posts`, data, config)
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

export const fetchAllPosts = createAsyncThunk(
  "post/fetchAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`)
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

export const fetchUserPosts = createAsyncThunk(
  "post/fetchUserPosts",
  async (_, thunkAPI) => {
    const config = {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    }

    try {
      const response = await axios.get(`${BASE_URL}/posts/user/all-posts`, config)
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

export const getSinglePost = createAsyncThunk(
  "post/getSinglePost",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${id}`)
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

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (id, thunkAPI) => {
    const config = {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    }

    try {
      const response = await axios.delete(`${BASE_URL}/posts/${id}`, config)
      thunkAPI.dispatch(fetchUserPosts())
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

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    user_posts: null,
    user_posts_loading: false,
    user_posts_error: null,
    posts: null,
    success: false,
    post_loading: false,
    post: null,
    post_error: null,
    error: null,
    deleted_loading: false,
    isDeleted: false,
    deleted_error: null,
  },
  reducers: {
    reset: (state) => {
      state.loading = false
      state.error = null
      state.success = false
      state.post_loading = false
      state.post_error = null
      state.isDeleted = false
      state.deleted_error = null
      state.deleted_loading = false
    },
  },
  extraReducers: {
    [fetchAllPosts.pending]: (state, action) => {
      state.loading = true
    },
    [fetchAllPosts.fulfilled]: (state, action) => {
      state.loading = false
      state.posts = action.payload
    },
    [fetchAllPosts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.posts = null
    },
    [addNewPost.pending]: (state, action) => {
      state.loading = true
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.loading = false
      state.success = true
      const inc_post = action.payload.data
      let prev_posts = [...state.posts.data.data]
      //pop the last one out
      if (prev_posts.length >= 12) {
        prev_posts.pop()
      }
      prev_posts = [inc_post, ...prev_posts]
      state.posts.data.data = prev_posts
    },
    [addNewPost.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.success = false
    },
    [getSinglePost.pending]: (state, action) => {
      state.post_loading = true
      state.post = null
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.post_loading = false
      state.post = action.payload.data
    },
    [getSinglePost.rejected]: (state, action) => {
      state.post_loading = false
      state.post_error = action.payload
      state.post = null
    },
    [fetchUserPosts.pending]: (state, action) => {
      state.user_posts_loading = true
    },
    [fetchUserPosts.fulfilled]: (state, action) => {
      state.user_posts_loading = false
      state.user_posts = action.payload.data
    },
    [fetchUserPosts.rejected]: (state, action) => {
      state.user_posts_loading = false
      state.user_posts_error = action.payload
      state.user_posts = null
    },
    [deletePost.pending]: (state, action) => {
      state.deleted_loading = true
    },
    [deletePost.fulfilled]: (state, action) => {
      state.deleted_loading = false
      state.isDeleted = true
    },
    [deletePost.rejected]: (state, action) => {
      state.deleted_loading = false
      state.deleted_error = action.payload
      state.isDeleted = null
    },
  },
})

export const { reset } = postSlice.actions

export default postSlice.reducer
