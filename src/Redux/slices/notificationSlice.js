
import { createSlice } from '@reduxjs/toolkit';

  const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
      notificationsList: [],
      loading: false,
      error: null,
    },
    reducers: {
      setNotifications(state, action) {
        state.notificationsList = action.payload;
      },
      clearNotifications(state) {
        state.notificationsList = [];
      },
    },
   
  });
  
export const {
      setNotifications,
      clearNotifications,
    } = notificationsSlice.actions;

export default notificationsSlice.reducer;
