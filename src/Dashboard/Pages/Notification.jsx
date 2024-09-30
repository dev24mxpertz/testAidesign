// import React, { useState } from 'react';
// import avatarImage1 from '../../Assets/images/spearker_1-300x300.jpg';
// import avatarImage2 from '../../Assets/images/client-image.png';
// import { Button, Modal } from 'antd';

// function Notifications() {

//   const [unread, setUnread] = useState([
//     {
//       id: 1,
//       sender: "Mark Pol",
//       message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//       timestamp: "44",
//       avatar: avatarImage1,
//       seen: true,
//     },
//     {
//       id: 2,
//       sender: "John Doe",
//       message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//       timestamp: "50",
//       avatar: avatarImage2,
//       seen: false,
//     },
//   ]);

//   const [read, setRead] = useState([
//     {
//       id: 3,
//       sender: "John Doe",
//       message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//       timestamp: "50",
//       avatar: avatarImage2,
//       seen: true,
//     },
//     {
//       id: 4,
//       sender: "John",
//       message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//       timestamp: "50",
//       avatar: avatarImage2,
//       seen: false,
//     },
//   ]);

//   // const [selectedNotification, setSelectedNotification] = useState(null);
//   // const [showModal, setShowModal] = useState(false);

//   const handleNotificationClick = (notification) => {
//     setSelectedNotification(notification);
//     setShowModal(true);

//     const isAlreadyRead = read.find(item => item.id === notification.id);

//     if (!isAlreadyRead) {
//       setUnread(unread.filter((item) => item.id !== notification.id));
//       setRead([...read, notification]);
//     }
//   };

//   const handleDeleteRecent = (id, isUnread, event) => {
//     event.stopPropagation();
//     if (isUnread) {
//       setUnread(unread.filter((item) => item.id !== id));
//     } else {
//       setRead(read.filter((item) => item.id !== id));
//     }
//     setShowModal(false);
//   };

// //   const handleModalClose = () => {
// //     setShowModal(false);
// //   };
// // const notifications = useSelector((state) => state.notifications.notificationsList);

// const [selectedNotification, setSelectedNotification] = React.useState(null);
// const [showModal, setShowModal] = React.useState(false);

// // const handleNotificationClick = (notification) => {
// //   setSelectedNotification(notification);
// //   setShowModal(true);
// //   // Optionally dispatch an action here to mark the notification as read
// // };

// const handleModalClose = () => {
//   setShowModal(false);
// };

//   return (
//     <div className="notifications-container">
//       {unread.length > 0 && (
//         <div>
//           <div className="notifications-header">
//             <h4>Unread</h4>
//           </div>
//           {unread.map((notification) => (
//             <div className="notification" key={notification.id} onClick={() => handleNotificationClick(notification)}>
//               <div>
//                 <img src={notification.avatar} alt="Avatar" className="notification-avatar" />
//               </div>
//               <div className="notification-content">
//                 <div className="notification-sender">{notification.sender}</div>
//                 <div className="notification-message">{notification.message.substring(0, 30)} ....</div>
//               </div>
//               <div className='d-flex notification-delete'>
//                 <div className="notification-timestamp">{notification.timestamp} minutes ago</div>
//                 <button className="notification-delete-button" onClick={(event) => handleDeleteRecent(notification.id, true, event)}>
//                   <img src={require("../../Assets/images/Delete.png")} alt="" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

// {selectedNotification && (
//   <Modal
//     title={selectedNotification.sender}
//     visible={showModal}
//     className='Notification-modal'
//     onCancel={handleModalClose}
//     footer={[
//       <Button key="close" onClick={handleModalClose}>
//         Close
//       </Button>
//     ]}
//   >
//     <div className="notification-popup-message">{selectedNotification.message}</div>
//   </Modal>
// )}

//       {read.length > 0 && (
//         <div className="read-notifications">
//           <div className="notifications-header">
//             <h4>Read</h4>
//           </div>
//           {read.map((notification) => (
//             <div className="notification" key={notification.id} onClick={() => handleNotificationClick(notification)}>
//               <div><img src={notification.avatar} alt="Avatar" className="notification-avatar" /></div>
//               <div className="notification-content">
//                 <div className="notification-sender">{notification.sender}</div>
//                 <div className="notification-message">{notification.message.substring(0, 50)} ....</div>
//               </div>
//               <div className='d-flex notification-delete'>
//                 <div className="notification-timestamp">{notification.timestamp} minutes ago</div>
//                 <button className="notification-delete-button" onClick={(event) => handleDeleteRecent(notification.id, false, event)}>
//                   <img src={require("../../Assets/images/Delete.png")} alt="" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Notifications;

import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";

import { setNotifications } from "../../Redux/slices/notificationSlice";
import avatarImage1 from "../../Assets/images/spearker_1-300x300.jpg";
import avatarImage2 from "../../Assets/images/client-image.png";
// import placeholderAvatar from '../../Assets/images/avatar-placeholder.png'; // Placeholder for any images not loaded

function Notifications() {
  const [unread, setUnread] = useState([]);
  const [read, setRead] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  // const dispatch = useDispatch();

  useEffect(() => {
    const url = `http://localhost:3000/get_notification/${userId}`;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const unreadNotifications = data.filter(
          (notification) => !notification.read
        );
        const readNotifications = data.filter(
          (notification) => notification.read
        );
        setUnread(unreadNotifications);
        setRead(readNotifications);
        // dispatch(setNotifications(data));
      })
      .catch((error) => console.error("Failed to fetch notifications:", error));
  }, []); // This effect runs once on component mount

  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      fetch(`http://localhost:3000/notification/read/${notification._id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to mark as read");
          }
          return response.json();
        })
        .then((updatedNotification) => {
          // Update local state to reflect the notification's new read status
          setUnread(unread.filter((notif) => notif._id !== notification._id));
          setRead([...read, { ...notification, read: true }]);
          setSelectedNotification(updatedNotification);
          setShowModal(true);
        })
        .catch((error) => console.error(error));
    } else {
      setSelectedNotification(notification);
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDeleteNotification = (notification) => {
    if (!notification || !notification._id) {
      console.error("Notification or Notification ID is undefined");
      return;
    }

    fetch(
      `http://localhost:3000/delete_notification/${userId}/${notification._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete notification");
        }
        return response.json();
      })
      .then((deletedNotification) => {
        // Update local state to remove the deleted notification
        setUnread(unread.filter((notif) => notif._id !== notification._id));
        setRead(read.filter((notif) => notif._id !== notification._id));
        // Optionally update other state or UI elements as needed
        console.log(`Notification ${notification._id} deleted successfully.`);
      })
      .catch((error) => console.error("Failed to delete notification:", error));
  };

  return (
    <div className="notifications-container">
      {unread.length > 0 && (
        <div>
          <div className="notifications-header">
            <h4>Unread</h4>
          </div>
          {unread.map((notification) => (
            <div
              className="notification"
              key={notification._id}
              onClick={() => handleNotificationClick(notification)}
            >
              <div>
                <img
                  src={notification.avatar}
                  alt="Avatar"
                  className="notification-avatar"
                />
              </div>
              <div className="notification-content">
                <div className="notification-sender">{notification.sender}</div>
                <div className="notification-message">
                  {notification.message.substring(0, 30)} ....
                </div>
              </div>
              <div className="d-flex notification-delete">
                <div className="notification-timestamp">
                  {notification.timestamp} minutes ago
                </div>
                <button
                  className="notification-delete-button"
                  onClick={(event) =>
                    handleDeleteNotification(notification, true, event)
                  }
                >
                  <img src={require("../../Assets/images/Delete.png")} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedNotification && (
        <Modal
          title={selectedNotification.sender}
          visible={showModal}
          onCancel={handleModalClose}
          footer={[
            <Button key="close" onClick={handleModalClose}>
              Close
            </Button>,
          ]}
        >
          <p>{selectedNotification.message}</p>
        </Modal>
      )}

      {read.length > 0 && (
        <div>
          <h4>Read</h4>
          {read.map((notification) => (
            <div
              className="notification"
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
            >
              <div>
                <img
                  src={notification.avatar}
                  alt="Avatar"
                  className="notification-avatar"
                />
              </div>
              <div className="notification-content">
                <div className="notification-sender">{notification.sender}</div>
                <div className="notification-message">
                  {notification.message.substring(0, 50)} ....
                </div>
              </div>
              <div className="d-flex notification-delete">
                <div className="notification-timestamp">
                  {notification.timestamp} minutes ago
                </div>
                <button
                  className="notification-delete-button "
                  onClick={(event) =>
                    handleDeleteNotification(notification, false, event)
                  }
                >
                  <img src={require("../../Assets/images/Delete.png")} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;
