import { Avatar, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../Styles/Alluser.css";
import { useNavigate } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

function AlluserPayment() {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // const handleAddUser = () => {
  //     setEditingUser(null); // Reset editingUser state
  //     setNewUser({
  //         username: '',
  //         email: '',
  //         password: '',
  //         role: ''
  //     });
  //     setShowAddUserModal(true);
  // };

  const handleCancelAddUser = () => {
    setShowAddUserModal(false);
  };
  const handleChangeNewUser = (e) => {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    } else {
      setNewUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleSaveNewUser = async () => {
    try {
      if (editingUser) {
        await axios.post(
          `http://localhost:3000/update_userby_admin/${userId}/${editingUser._id}`,
          editingUser,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.post("http://localhost:3000/add_userby_admin", newUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      setShowAddUserModal(false);
      fetchUsers();
      toast.success("User saved successfully");
    } catch (error) {
      console.error("Error saving user:", error);
      toast.error("Failed to save user");
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getallusers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
    setNewUser({
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
    });
    setShowAddUserModal(true);
  };

  const handleDelete = async (_id) => {
    try {
      await axios.post(
        `http://localhost:3000/delete_userby_admin/${userId}/${_id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchUsers();
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
    }
  };

  const handleViewPlan = (userId1) => {
    // Navigate to the plan view page
    navigate(`/dashboard/Paymentdetail/PlanDetail`, { state: { userId1 } });
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <div className="d-flex flex-row-reverse justify-content-between">
          <input
            type="text"
            placeholder="Search by name or email"
            style={{ fontSize: "16px" }}
            className="usersearch"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Modal
          visible={showAddUserModal}
          onCancel={handleCancelAddUser}
          footer={null}
          className="add-popup"
          title={editingUser ? "Edit User" : "Add New User"}
        >
          {/* <div className='popup-bg'>
                        <div className='user-employee-form'>
                            <div className='d-flex flex-row gap-1 mt-4 mb-4'>
                                <div className='w-100 d-flex flex-column gap-3'>
                                    <input autoComplete="off" className='form-input' type="text" name="username" placeholder="Name" value={editingUser ? editingUser.username : newUser.username} onChange={handleChangeNewUser} />
                                    <input autoComplete="off" className='form-input' type="email" name="email" placeholder="Email" value={editingUser ? editingUser.email : newUser.email} onChange={handleChangeNewUser} />
                                </div>
                                <div className='w-100 d-flex flex-column gap-3 align-items-end'>
                                    <input autoComplete="off" className='form-input' type="password" name="password" placeholder="Password" value={editingUser ? editingUser.password : newUser.password} onChange={handleChangeNewUser} />
                                    <select
                                        className='form-input'
                                        name="role"
                                        value={editingUser ? editingUser.role : newUser.role}
                                        onChange={handleChangeNewUser}
                                    >
                                        <option value="" disabled hidden>Role</option>
                                        <option className='form-input' value="employee">Employee</option>
                                        <option className='form-input' value="manager">Manager</option>
                                        <option className='form-input' value="admin">Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ textAlign: 'start' }} className='d-flex gap-2 mb-2' >
                                <button style={{ marginRight: '5px' }} className='dashboard-btn' onClick={handleCancelAddUser}>Cancel</button>
                                <button className='dashboard-btn' onClick={handleSaveNewUser}>Save</button>
                            </div>
                        </div>
                    </div> */}
          <div className="popup-bg">
            <div className="user-employee-form">
              <div className="d-flex flex-row gap-1 mt-4 mb-4">
                <div className="w-100 d-flex flex-column gap-3">
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="username"
                    placeholder="Name"
                    value={
                      editingUser ? editingUser.username : newUser.username
                    }
                    onChange={handleChangeNewUser}
                  />
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={editingUser ? editingUser.email : newUser.email}
                    onChange={handleChangeNewUser}
                  />
                </div>
                <div className="w-100 d-flex flex-column gap-3 align-items-end">
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={
                      editingUser ? editingUser.password : newUser.password
                    }
                    onChange={handleChangeNewUser}
                  />
                  <select
                    className="form-input"
                    name="role"
                    value={editingUser ? editingUser.role : newUser.role}
                    onChange={handleChangeNewUser}
                  >
                    <option value="" disabled hidden>
                      Role
                    </option>
                    <option className="form-input" value="employee">
                      Employee
                    </option>
                    <option className="form-input" value="manager">
                      Manager
                    </option>
                    <option className="form-input" value="admin">
                      Admin
                    </option>
                  </select>
                </div>
              </div>
              <div style={{ textAlign: "start" }} className="d-flex gap-2 mb-2">
                <button
                  style={{ marginRight: "5px" }}
                  className="dashboard-btn"
                  onClick={handleCancelAddUser}
                >
                  Cancel
                </button>
                <button className="dashboard-btn" onClick={handleSaveNewUser}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </Modal>

        <div className="user-table">
          <table className="all-user-table">
            <thead>
              <tr className="min-w">
                <th>S.No</th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Current Plan</th>
                <th>Plan Price</th>
                <th></th>
                {/* <th>Delete</th>
                                <th>View</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id} className="min-w">
                  <td style={{ width: "30px", textAlign: "start" }}>
                    {index + 1}
                  </td>
                  <td> {user.username}</td>
                  <td>{user.email}</td>
                  <td>{""}</td>
                  <td>{""}</td>
                  <td className="d-flex">
                    {/* Edit button */}
                    {/* <button onClick={() => handleEdit(user)}><img src={require("../../Assets/images/Edit.png")} alt='' /></button> */}
                    {/* </td>
                                    <td> */}
                    {/* Delete button */}
                    <button onClick={() => handleDelete(user._id)}>
                      <img
                        src={require("../../Assets/images/Delete.png")}
                        alt=""
                      />
                    </button>
                    {/* </td>
                                    <td> */}
                    <button
                      className="viewplan"
                      onClick={() => handleViewPlan(user._id)}
                    >
                      <EyeOutlined />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AlluserPayment;
