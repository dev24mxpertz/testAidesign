// import { createSlice } from "@reduxjs/toolkit";
// import { fetchUserDetails,fetchNotifications } from "../api";

// const initialState = {
//     notifications:[],
//     userDetails:null,
//     loading:false,
//     error:null
// };

// const userProfileSlice = createSlice({
//     name:"userProfile",
//     initialState,
//     reducers:{
//         setNotifications:(state,action)=>{
//             state.notifications = action.payload
//         },
//         fetchUserDetailsRequest:(state)=>{
//             state.loading = true;
//             state.error = null;
//         },
//         fetchUserDetailsSuccess:(state,action)=>{
//             state.loading = false;
//             state.userDetails = action.payload
//         },
//         fetchUserDetailsFailure:(state,action)=>{
//             state.loading = false;
//             state.error = action.payload
//         },
//     },
// });

// export const {
//     setNotifications,
//     fetchUserDetailsRequest,
//     fetchUserDetailsSuccess,
//     fetchUserDetailsFailure,
//   } = userProfileSlice.actions;
  
//   export const fetchUserDetailsAsync = () => async (dispatch, getState) => {
//     const { userId, token } = getState().auth;
//     dispatch(fetchUserDetailsRequest());
//     try {
//       const userDetails = await fetchUserDetails(userId, token);
//       dispatch(fetchUserDetailsSuccess(userDetails));
//     } catch (error) {
//       dispatch(fetchUserDetailsFailure(error.message));
//       console.error('Error fetching user details:', error);
//     }
//   };
  
//   export const fetchNotificationsAsync = () => async (dispatch, getState) => {
//     const { userId, token } = getState().auth;
//     dispatch(fetchUserDetailsRequest());
//     try {
//       const notifications = await fetchNotifications(userId, token);
//       dispatch(setNotifications(notifications));
//     } catch (error) {
//       dispatch(fetchUserDetailsFailure(error.message));
//       console.error('Error fetching notifications:', error);
//     }
//   };
  
//   export default userProfileSlice.reducer;