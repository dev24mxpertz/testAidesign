// import IconButton from '@mui/material/IconButton';
// import { Avatar, Badge } from 'antd';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import AvtarImage from '../../Assets/images/client-image.png';

// const users = { name: 'John Doe', email: 'john.doe@example.com', location: 'New York', avatar: AvtarImage };

// function UserMap() {

//     return (
//         <div className='text-white col-12 d-flex align-items-center header-avtar'>
//             <IconButton size="large" aria-label="show 17 new notifications" color="inherit" className='me-3 me-lg-0'>
//                 <a as={Link} href="/dashboard/Notifications">
//                     <Badge count={5}>
//                         <Avatar src={require("../../Assets/images/Bell-icon.png")} alt="" />
//                     </Badge>
//                 </a>
//             </IconButton>
//             <div className='User_wrapper d-none d-lg-block'>
//                 <h2>{users.name}</h2>
//                 <h2>{users.email}</h2>
//             </div>
//             <Avatar src={users.avatar} size={64} style={{ width: '100%' }} />
//         </div>
//     );
// }
// function ProfileComponent() {
//     return (
//         <div className="profile-container">
//             <UserMap />
//         </div>
//     );
// }

// export default ProfileComponent;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { useDispatch, useSelector } from "react-redux";
import { Badge, Avatar, Modal } from "antd";
import AvtarImage from "../../Assets/images/client-image.png";
import { setNotifications } from "../../Redux/slices/notificationSlice";
import { jwtDecode } from "jwt-decode";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";

// const users = { name: 'John Doe', email: 'john.doe@example.com', location: 'New York', avatar: AvtarImage };
const users = { avatar: AvtarImage };

function UserMap() {
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [notificationCount, setNotificationCount] = useState(0);
  const [notification, setNotification] = useState([]); // Store the notifications
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility
  const [userDetails, setUserDetails] = useState("");
  const navigate = useNavigate();

  function tokenHasExpired(token) {
    if (!token) {
      return true; // No token, consider it expired
    }
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert to seconds
      return decoded.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // On error, consider the token expired
    }
  }

  useEffect(() => {
    if (tokenHasExpired(token)) {
      // Handle expired token
      console.log("Token has expired.");
      // Potentially redirect to login or refresh the token
    } else {
      // Token is valid
      console.log("Token is valid.");
    }
  }, [token]);

  // useEffect(() => {
  //     handleFetchNotifications();
  // }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const url = `http://localhost:3000/get_user/${userId}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [userId, token]);

  // Function to handle fetching notifications and navigation
  // const handleFetchNotifications = async () => {
  //     try {
  //         const url = `http://localhost:3000/get_notification/${userId}`;

  //         const response = await fetch(url, {
  //             headers: {
  //                 'Authorization': `Bearer ${token}`,
  //                 'Content-Type': 'application/json'
  //             }
  //         });

  //         if (!response.ok) {
  //             throw new Error('Failed to fetch notifications');
  //         }

  //         const data = await response.json();
  //         setNotificationCount(data.length);
  //         setNotification(data);
  //         setIsModalVisible(true);

  //         dispatch(setNotifications(data));

  //         navigate('/dashboard/Notifications');
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  const renderNotificationModal = () => (
    <Modal
      title="Notifications"
      visible={isModalVisible}
      onOk={() => setIsModalVisible(false)}
      onCancel={() => setIsModalVisible(false)}
    >
      {notification.map((notification, index) => (
        <p key={index}>{notification.message}</p> // Assuming the notification object has a 'message' field
      ))}
    </Modal>
  );

  const handleAvatarClick = () => {
    setNotificationCount(0);
    setIsModalVisible(false);
  };

  // const navigate = useNavigate();
  const notification1 = () => {
    navigate("/dashboard/Notifications");
  };

  return (
    <div className="text-whit col-12 d-flex align-items-center header-avtar">
      <Tooltip placement="left" title={"notification"}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          className="me-3 me-lg-0"
          onClick={handleAvatarClick}
        >
          <Badge count={notificationCount}>
            <Avatar
              onClick={notification1}
              src={require("../../Assets/images/Bell-icon.png")}
              alt=""
            />
          </Badge>
        </IconButton>
      </Tooltip>
      {renderNotificationModal()}
      <div className="User_wrapper d-none d-lg-block">
        {userDetails && (
          <>
            <h2>{userDetails.username}</h2>
            <h2>{userDetails.email}</h2>
          </>
        )}
      </div>
      <Avatar
        src={userDetails.profileImageUrl}
        size={64}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default UserMap;
