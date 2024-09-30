import { Avatar, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../Styles/AddUser.css";

const AddUser = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!newUser.username || !newUser.username.trim()) {
      errors.username = "Name is required";
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(newUser.username)) {
      errors.username = "Name should contain only alphabets";
      valid = false;
    }

    if (!newUser.email || !newUser.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      errors.email = "Invalid email format";
      valid = false;
    }
    setFormErrors(errors);
    return valid;
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setNewUser({
      username: "",
      email: "",
      password: "",
      role: "",
    });
    setShowAddUserModal(true);
  };

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
    if (!validateForm()) {
      return;
    }
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
          // await axios.post('http://localhost:3000/add_userby_admin', newUser, {
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
      const response = await axios.get(
        `http://localhost:3000/get_userby_admin/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
      username: user.username || "",
      email: user.email || "",
      phone: user.phone || "",
      userId: user.id || "",
      profileImageUrl: user.profileImageUrl || "",
      phone: user.phone || "",
      user_Address: user.user_Address || "",
      user_Type: user.user_Type || "",
      Other: user.Other || "",
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

  return (
    <>
      <button className="dashboard-btn ms-auto" onClick={handleAddUser}>
        Add User
      </button>
      <Modal
        visible={showAddUserModal}
        onCancel={handleCancelAddUser}
        footer={null}
        className="add-popup"
        style={{ backgroundColor: "#8C90E5" }}
        title={editingUser ? "Edit User" : "Add New User"}
      >
        <div
          className="popup-bg"
          style={{ backgroundColor: "#8C90E5 !important" }}
        >
          <div
            className="user-employee-form"
            style={{ backgroundColor: "#8C90E5 !important" }}
          >
            <div className="d-flex flex-row gap-1 mt-4 mb-4">
              <div className="w-100 d-flex flex-column gap-3">
                <input
                  autoComplete="off"
                  className="form-input"
                  type="text"
                  name="username"
                  placeholder="Name"
                  value={editingUser ? editingUser.username : newUser.username}
                  onChange={handleChangeNewUser}
                />
                {formErrors.username && (
                  <span className="error-form-2">{formErrors.username}</span>
                )}
                <input
                  autoComplete="off"
                  className="form-input"
                  type="email"
                  disabled={!!editingUser}
                  name="email"
                  placeholder="Email"
                  value={editingUser ? editingUser.email : newUser.email}
                  onChange={handleChangeNewUser}
                />
                {formErrors.email && (
                  <span className="error-form-2">{formErrors.email}</span>
                )}
              </div>
              <div className="w-100 d-flex flex-column gap-3 align-items-end">
                <input
                  autoComplete="off"
                  className="form-input"
                  type="password"
                  name="password"
                  value={editingUser ? editingUser.password : newUser.password}
                  placeholder="Password"
                  onChange={handleChangeNewUser}
                />
                {formErrors.password && (
                  <span className="error-form-2">{formErrors.password}</span>
                )}
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
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Role</th>
              <th>Edit Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((user, index) => (
                <tr key={user.id}>
                  <td style={{ width: "30px", textAlign: "start" }}>
                    {index + 1}
                  </td>
                  <td style={{ minWidth: "150px" }}>
                    <Avatar src={user.profileImageUrl} size="medium" />{" "}
                    {user.username}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>
                      <img
                        src={require("../../Assets/images/Edit.png")}
                        alt=""
                      />
                    </button>
                    <button onClick={() => handleDelete(user._id)}>
                      <img
                        src={require("../../Assets/images/Delete.png")}
                        alt=""
                      />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddUser;
