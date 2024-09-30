import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { saveQA } from '../api'; // Assuming saveQA is your API function for saving Q&A

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const modalCreateSlice = createSlice({
  name: 'modalCreate',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  addMessage,
  clearMessages,
  setLoading,
  setError,
  clearError,
} = modalCreateSlice.actions;

export const selectMessages = (state) => state.modalCreate.messages;
export const selectLoading = (state) => state.modalCreate.loading;
export const selectError = (state) => state.modalCreate.error;

export const saveQAToServer = (question, answer) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await saveQA(question, answer);
    dispatch(addMessage({ text: question, isUser: true }));
    dispatch(addMessage({ text: answer, isUser: false }));
    dispatch(setLoading(false));
    toast.success('Q&A saved successfully!');
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    toast.error('Failed to save Q&A. Please try again.');
  }
};

export default modalCreateSlice.reducer;
