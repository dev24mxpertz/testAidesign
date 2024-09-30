import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../api";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  response: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state) => {
      state.loading = false;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
  },
});

export const { signupRequest, signupSuccess, signupFailure, setResponse } =
  signupSlice.actions;

export const signupUser = (formData) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    const response = await signup("http://localhost:3000/signup", formData);
    // Check if the signup was successful (status code 201)
    if (response && response.data && response.data.success) {
      dispatch(signupSuccess());
      return response; // Return the response object if needed
    } else {
      dispatch(signupFailure()); // Dispatch the specific error message
      throw new Error("Signup failed");
    }
  } catch (error) {
    // Handle network errors or unexpected errors
    dispatch(signupFailure(error.message));
    console.error("Error during signup:", error);
    throw error;
  }
};

export default signupSlice.reducer;
