// // slices/loginSlice.js

// import { createSlice } from '@reduxjs/toolkit';
// import { login } from '../api';
// import { toast } from 'react-toastify';

// const initialState = {
//   loading: false,
//   error: null,
//   token: null, // Add token to the initial state
// };

// const loginSlice = createSlice({
//   name: 'login',
//   initialState,
//   reducers: {
//     loginRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess: (state, action) => {
//       state.loading = false;
//       state.token = action.payload.token; // Set the token in the state
//     },
//     loginFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

// export const loginUser = (formData) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const data = await login('https://ai-nfmd.onrender.com/login', formData); // Use your login API endpoint
//     dispatch(loginSuccess({ token: data.token })); // Pass the token to the success action
//     toast.success('Login successful!');
//     // Dispatch any other actions or handle the data as needed
//   } catch (error) {
//     dispatch(loginFailure(error.message));
//     console.error('Error during login:', error);
//     toast.error('Login failed. Please try again.');
//   }
// };

// export default loginSlice.reducer;



