import { Avatar, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";

function EmployeePage() {
  const [error] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    Name: "",
    Email_id: "",
    Phone_Number: "",
    EmployeeId: "",
    Address: "",
    Join_Date: "",
    Salary: "",
    profileImageUrl: "",
  });
  const [errors, setErrors] = useState({
    Name: "",
    Email_id: "",
    Phone_Number: "",
    Join_Date: "",
    Salary: "",
    Address: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]); // Use local state to store employees
  const [users, setUsers] = useState([]);
  const authState = useSelector((state) => state.auth); // Get auth state from Redux
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const [avatarSrc, setAvatarSrc] = useState("");

  const [selectedImageFile, setSelectedImageFile] = useState(null);

  useEffect(() => {
    fetchEmployees(); // Fetch employees on component mount
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/get_employee/${authState.userId}`,
        {
          headers: {
            Authorization: `Bearer ${authState.token}`, // Include token in headers
          },
        }
      );
      setEmployees(response.data.employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      toast.error("Failed to fetch employees");
    }
  };

  const slicedJoinDates = employees
    .map((employee) => employee.Join_Date)
    .slice(0, 10);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowModal(true);
    setNewEmployee(employee);
  };

  const handleSaveEdit = async () => {
    const formattedJoinDate = formatDate(newEmployee.Join_Date);

    try {
      console.log("Auth token:", token); // Log auth token
      const { data } = await axios.post(
        `http://localhost:3000/update_employee/${editingEmployee._id}`,
        {
          Name: editingEmployee.Name,
          Email_id: editingEmployee.Email_id,
          Phone_Number: editingEmployee.Phone_Number,
          EmployeeId: editingEmployee.EmployeeId,
          Address: editingEmployee.Address,
          Join_Date: editingEmployee.Join_Date,
          Salary: editingEmployee.Salary,
          profileImageUrl: editingEmployee.profileImageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", data); // Log response
      setShowModal(false);
      fetchEmployees();
      toast.success("Employee updated successfully");
    } catch (error) {
      console.error("Error updating employee:", error);
      toast.error("Failed to update employee");
    }
  };

  const handleSaveNewEmployee = async () => {
    const formIsValid = validateForm();
    if (!formIsValid) {
      return;
    }

    const formattedJoinDate =
      newEmployee.Join_Date instanceof Date
        ? formatDate(newEmployee.Join_Date)
        : newEmployee.Join_Date;

    try {
      const response = await axios.post(
        `http://localhost:3000/add_employee/${userId}`,
        newEmployee,
        {
          Join_Date: formattedJoinDate,
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      );

      // Show success toast for adding employee
      toast.success("Employee added successfully");

      // Trigger image update API after adding the employee
      await updateEmployeeImage(response.data.employee._id);

      // Fetch employees after adding new
      fetchEmployees();

      // Close modal
      setShowModal(false);
    } catch (error) {
      console.error("Error adding new employee:", error);
      toast.error("Failed to add new employee");
    }
  };

  const updateEmployeeImage = async (employeeId) => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImageFile); // Assuming you have a selectedImageFile variable

      // Make a POST request to the employee image update API
      const response = await axios.post(
        `http://localhost:3000/employees/${employeeId}/image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type to multipart/form-data for file upload
            Authorization: `Bearer ${token}`, // Include token in headers if required
          },
        }
      );

      // Show success toast for updating employee image
      toast.success("Employee image updated successfully");
    } catch (error) {
      console.error("Error updating employee image:", error);
      toast.error("Failed to update employee image");
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    // Name validation
    if (!newEmployee.Name.trim()) {
      errors.Name = "Name is required";
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(newEmployee.Name)) {
      errors.Name = "Name should contain only alphabets";
      valid = false;
    }

    // Phone number validation
    if (!newEmployee.Phone_Number.trim()) {
      errors.Phone_Number = "Phone number is required";
      valid = false;
    } else if (!/^\d+$/.test(newEmployee.Phone_Number)) {
      errors.Phone_Number = "Phone number must contain only numbers";
      valid = false;
    } else if (
      newEmployee.Phone_Number.length < 7 ||
      newEmployee.Phone_Number.length > 15
    ) {
      errors.Phone_Number = "Phone number must be between 7 and 15 digits";
      valid = false;
    }

    // Email validation
    if (!newEmployee.Email_id.trim()) {
      errors.Email_id = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(newEmployee.Email_id)) {
      errors.Email_id = "Invalid email format";
      valid = false;
    }

    // Join date validation - You can implement date validation logic here

    // Salary validation
    if (!newEmployee.Salary.trim()) {
      errors.Salary = "Salary is required";
      valid = false;
    } else if (!/^\d+$/.test(newEmployee.Salary)) {
      errors.Salary = "Salary must contain only numbers";
      valid = false;
    }

    if (!newEmployee.Address.trim()) {
      errors.Address = "Address is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleCancelAdd = () => {
    setShowModal(false);
    setEditingEmployee(null);
    setNewEmployee({
      Name: "",
      Email_id: "",
      Phone_Number: "",
      EmployeeId: "",
      Address: "",
      Join_Date: "",
      Salary: "",
      profileImageUrl: "",
    });
    // Clear validation errors as well
    setErrors({
      Name: "",
      Email_id: "",
      Phone_Number: "",
      Join_Date: "",
      Salary: "",
    });
  };
  const formatDate = (date) => {
    if (!(date instanceof Date)) {
      // If 'date' is not a Date object, parse it to create a Date object
      date = new Date(date);
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    switch (name) {
      case "Name":
        errorMessage = /^[a-zA-Z]+$/.test(value)
          ? ""
          : "Name must contain only alphabets";
        break;
      case "Phone_Number":
        if (!/^\d+$/.test(value)) {
          errorMessage = "Phone number must contain only numbers";
        } else if (value.length < 7 || value.length > 15) {
          errorMessage = "Phone number must be between 7 and 15 digits";
        }
        break;
      case "Email_id":
        errorMessage = /\S+@\S+\.\S+/.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "Join_Date":
        if (!value.trim()) {
          errorMessage = "Join date is required";
        } else {
          // Check if the input value matches the desired date format (YYYY-MM-DD)
          const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
          if (!dateFormat.test(value)) {
            errorMessage = "Invalid date format. Please use YYYY-MM-DD";
          } else {
            // Set the formatted date to the state
            const formattedJoinDate = formatDate(new Date(value));
            setNewEmployee((prevNewEmployee) => ({
              ...prevNewEmployee,
              [name]: formattedJoinDate,
            }));
          }
        }
        break;
      case "Salary":
        errorMessage = /^\d+$/.test(value)
          ? ""
          : "Salary must contain only numbers";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

    if (editingEmployee) {
      setEditingEmployee((prevEmployee) => ({
        ...prevEmployee,
        [name]: value,
      }));
    } else {
      setNewEmployee((prevNewEmployee) => ({
        ...prevNewEmployee,
        [name]: value,
      }));
    }
  };

  const handleDelete = async (_id) => {
    try {
      await axios.post(`http://localhost:3000/delete_employee/${_id}`, null, {
        headers: {
          Authorization: `Bearer ${authState.token}`, // Include token in headers
        },
      });
      fetchEmployees(); // Refetch employees after deletion
      toast.success("Employee deleted successfully");
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Failed to delete employee");
    }
  };

  const handleAddNew = () => {
    setShowModal(true);
    setNewEmployee({
      Name: "",
      Email_id: "",
      Phone_Number: "",
      EmployeeId: "",
      Address: "",
      Join_Date: "",
      Salary: "",
      profileImageUrl: "",
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      selectedImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result;
        setAvatarSrc(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const isFormValid = Object.values(errors).every((error) => error === "");

  return (
    <>
      <div className="employee-heading">
        {error && <p>{error}</p>}
        <button className="dashboard-btn ms-auto" onClick={handleAddNew}>
          Add New
        </button>
      </div>
      <div>
        <Modal
          visible={showModal}
          onCancel={handleCancelAdd}
          footer={null}
          className="add-popup"
          title={editingEmployee ? "Edit Employee" : "Add New Employee"}
        >
          <div className="popup-bg">
            <div className="add-employee-avtar">
              <Avatar
                style={{ border: "1px solid" }}
                value={employees.profileImageUrl}
                src={avatarSrc}
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <button className="dashboard-btn" onClick={handleClick}>
                Upload Image
              </button>
            </div>
            <div className="add-employee-form">
              <div className="w-50">
                <div>
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={
                      editingEmployee ? editingEmployee.Name : newEmployee.Name
                    }
                    onChange={handleChange}
                  />
                  <br />
                  {errors.Name && (
                    <span className="error-form-2">{errors.Name}</span>
                  )}
                </div>
                <div>
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="email"
                    name="Email_id"
                    placeholder="Email"
                    value={
                      editingEmployee
                        ? editingEmployee.Email_id
                        : newEmployee.Email_id
                    }
                    onChange={handleChange}
                  />
                  <br />
                  {errors.Email_id && (
                    <span className="error-form-2">{errors.Email_id}</span>
                  )}
                </div>
                <div>
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="Phone_Number"
                    placeholder="Phone"
                    value={
                      editingEmployee
                        ? editingEmployee.Phone_Number
                        : newEmployee.Phone_Number
                    }
                    onChange={handleChange}
                  />
                  <br />
                  {errors.Phone_Number && (
                    <span className="error-form-2">{errors.Phone_Number}</span>
                  )}
                </div>
                <div>
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="EmployeeId"
                    placeholder="Employee ID"
                    value={
                      editingEmployee
                        ? editingEmployee.EmployeeId
                        : newEmployee.EmployeeId
                    }
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-50" style={{ textAlign: "end" }}>
                <div className="w-100">
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="Address"
                    placeholder="Address"
                    value={
                      editingEmployee
                        ? editingEmployee.Address
                        : newEmployee.Address
                    }
                    onChange={handleChange}
                  />
                  <br />
                  <div style={{ textAlign: "start", marginLeft: "50px" }}>
                    {errors.Address && (
                      <span className="error-form-2">{errors.Address}</span>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="Join_Date"
                    placeholder="Join Date"
                    value={
                      editingEmployee && editingEmployee.Join_Date
                        ? editingEmployee.Join_Date.slice(0, 10)
                        : newEmployee && newEmployee.Join_Date
                        ? newEmployee.Join_Date.slice(0, 10)
                        : ""
                    }
                    onChange={handleChange}
                  />
                  <br />
                  {errors.Join_Date && (
                    <span className="error-form-2">{errors.Join_Date}</span>
                  )}
                </div>
                <div>
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="Salary"
                    placeholder="Salary"
                    value={
                      editingEmployee
                        ? editingEmployee.Salary
                        : newEmployee.Salary
                    }
                    onChange={handleChange}
                  />
                  <br />
                  <div style={{ textAlign: "start", marginLeft: "50px" }}>
                    {errors.Salary && (
                      <span className="error-form-2">{errors.Salary}</span>
                    )}
                  </div>
                </div>
                <div className="w-100">
                  <button
                    style={{ marginRight: "5px" }}
                    className="dashboard-btn"
                    onClick={handleCancelAdd}
                  >
                    Cancel
                  </button>
                  <button
                    className="dashboard-btn"
                    onClick={
                      editingEmployee ? handleSaveEdit : handleSaveNewEmployee
                    }
                    disabled={!isFormValid}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div className="employee-table">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Phone</th>
              <th>Employee ID</th>
              <th>Address</th>
              <th>Join_Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(employees) &&
              employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td style={{ width: "30px", textAlign: "start" }}>
                    {index + 1}
                  </td>
                  <td style={{ minWidth: "150px" }}> {employee.Name}</td>
                  <td>{employee.Email_id}</td>
                  <td>{employee.Phone_Number}</td>
                  <td>{employee.EmployeeId}</td>
                  <td>{employee.Address}</td>
                  <td>
                    {console.log(typeof employee.Join_Date, employee.Join_Date)}
                    {new Date(employee.Join_Date).toLocaleDateString()}
                  </td>
                  <td>
                    <button onClick={() => handleEdit(employee)}>
                      <img
                        src={require("../../Assets/images/Edit.png")}
                        alt=""
                      />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(employee._id)}>
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
}

export default EmployeePage;
