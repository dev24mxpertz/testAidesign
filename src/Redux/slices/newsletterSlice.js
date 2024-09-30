import { createSlice } from "@reduxjs/toolkit";
import { NewsLetter } from "../api";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
};

const NewsLetterSlice = createSlice({
  name: "NewsLetter",
  initialState,
  reducers: {
    NewsLetterRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    NewsLetterSuccess: (state) => {
      state.loading = false;
    },
    NewsLetterFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { NewsLetterRequest, NewsLetterSuccess, NewsLetterFailure } =
  NewsLetterSlice.actions;

export const NewsLetterUser = (formData) => async (dispatch) => {
  dispatch(NewsLetterRequest());
  try {
    await NewsLetter("http://localhost:3000/subscribe", formData);
    dispatch(NewsLetterSuccess());
    toast.success("Join Our Network successful!");
  } catch (error) {
    dispatch(NewsLetterFailure(error.message));
    console.error("Error during Join Our Network:", error);
    toast.error("Join Our Network failed. Please try again.");
  }
};

export default NewsLetterSlice.reducer;
