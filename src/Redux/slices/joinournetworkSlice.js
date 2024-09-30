// slices/joinOurNetworkSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { joinNetwork } from "../api";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
};

const joinOurNetworkSlice = createSlice({
  name: "joinOurNetwork",
  initialState,
  reducers: {
    joinNetworkRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    joinNetworkSuccess: (state) => {
      state.loading = false;
    },
    joinNetworkFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { joinNetworkRequest, joinNetworkSuccess, joinNetworkFailure } =
  joinOurNetworkSlice.actions;

export const joinNetworkUser = (formData) => async (dispatch) => {
  dispatch(joinNetworkRequest());
  try {
    await joinNetwork("http://localhost:3000/getinTouch", formData);
    dispatch(joinNetworkSuccess());
    toast.success("Join Our Network successful!");
  } catch (error) {
    dispatch(joinNetworkFailure(error.message));
    console.error("Error during Join Our Network:", error);
    toast.error("Join Our Network failed. Please try again.");
  }
};

export default joinOurNetworkSlice.reducer;
