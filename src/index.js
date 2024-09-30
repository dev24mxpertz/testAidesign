import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { store } from './Redux/store'; // Ensure this is correctly imported from your store configuration
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import "bootstrap/dist/css/bootstrap.min.css";
import { persistor } from './Redux/store'; 
import { UserDetailsProvider } from './context/UserDetailsContext'
import { ChatProvider } from './context/ChatContext';
import FloatingButton from './Screens/HomePage/Components/FloatingChatButton';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserDetailsProvider>
          <ChatProvider>
            <ToastContainer />
            <App />
            {/* <FloatingButton /> */}
          </ChatProvider>
        </UserDetailsProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();



