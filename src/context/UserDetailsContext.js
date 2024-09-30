// src/contexts/UserDetailsContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const UserDetailsContext = createContext();

// Create a custom hook to use the context
export const useUserDetails = () => useContext(UserDetailsContext);

// Define the provider component
export const UserDetailsProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null); // Initialize the state
  const [userID, setUserID] = useState(null);



  const [yesChat, setYesChat] = useState(false);


  useEffect(() => {
    // Load user details from localStorage if available
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  useEffect(() => {
    // Save user details to localStorage whenever it changes
    if (userDetails) {
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    } else {
      localStorage.removeItem('userDetails');
    }
  }, [userDetails]);


  const updateUserDetailsByID = (id, details) => {
    if (id === userID) {
      setUserDetails(details);
    }
  };

  // The value passed to Provider should contain everything you want to be accessible
  // to the components that consume this context
  const value = {
    userDetails,
    setUserDetails,
    userID,
    setUserID,
    yesChat,
    setYesChat,
    updateUserDetailsByID 
  };
  return (
    <UserDetailsContext.Provider value={value}>
      {children}
    </UserDetailsContext.Provider>
  );
};

