import { createSlice } from "@reduxjs/toolkit";
import { getintouch } from "../api";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
};

const getInTouchSlice = createSlice({
  name: "getInTouch",
  initialState,
  reducers: {
    getInTouchRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getInTouchSuccess: (state) => {
      state.loading = false;
    },
    getInTouchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getInTouchRequest, getInTouchSuccess, getInTouchFailure } =
  getInTouchSlice.actions;

export const getInTouchUser = (formData) => async (dispatch) => {
  dispatch(getInTouchRequest());
  try {
    await getintouch("http://localhost:3000/getinTouch", formData);
    dispatch(getInTouchSuccess());
    toast.success("Join Our Network successful!");
  } catch (error) {
    dispatch(getInTouchFailure(error.message));
    console.error("Error during Join Our Network:", error);
    toast.error("Join Our Network failed. Please try again.");
  }
};

export default getInTouchSlice.reducer;
