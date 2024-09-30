import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import authReducer from './slices/authSlice';
import notificationsReducer from './slices/notificationSlice';
import signupReducer from './slices/signupSlice';
import loginReducer from './slices/loginSlice'
import joinournetworkReducer from './slices/joinournetworkSlice'
import getInTouchReducer from './slices/getintouchSlice'
import NewsLetterReducer from './slices/newsletterSlice'
import EmployeeReducer from './slices/employeeSlice'
import ModalcreateReducer from './slices/modalcreateSlice'
import UserProfileReducer from './slices/userpofileSlice'


const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
  signup: signupReducer,
  login:loginReducer,
  joinNetwork:joinournetworkReducer,
  getintouch:getInTouchReducer,
  Newsletter:NewsLetterReducer,
  Employee:EmployeeReducer,
  Modalcreate:ModalcreateReducer,
  userProfile:UserProfileReducer


});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'notifications','signup','login','joinNetwork','getintouch','Newsletter','Employee','Modalcreate','userProfile'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);



