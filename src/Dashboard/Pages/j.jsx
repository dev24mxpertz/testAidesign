// import { Avatar, Modal } from 'antd';
// import React, { useEffect, useRef, useState } from 'react';
// import AvtarImage from '../../Assets/images/client-image.png';

// function EmployeePage() {
//     const [employees, setEmployees] = useState([]);
//     const [error] = useState(null);
//     const [editingEmployee, setEditingEmployee] = useState(null);
//     const [newEmployee, setNewEmployee] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         employeeId: '',
//         address: '',
//         avatar: null
//     });
//     const [showAddForm, setShowAddForm] = useState(false);

//     useEffect(() => {
//         const simulatedData = [
//             {
//                 id: 1,
//                 name: 'John Doe',
//                 email: 'john@example.com',
//                 phone: '123-456-7890',
//                 employeeId: '001',
//                 address: '123 Main St',
//                 avatar: AvtarImage
//             },
//             {
//                 id: 2,
//                 name: 'Jane Smith',
//                 email: 'jane@example.com',
//                 phone: '987-654-3210',
//                 employeeId: '002',
//                 address: '456 Elm St',
//                 avatar: AvtarImage
//             }
//         ];

//         setEmployees(simulatedData);
//     }, []);

//     // const handleEdit = (id) => {
//     //     // Find the employee to edit
//     //     const employeeToEdit = employees.find(employee => employee.id === id);
//     //     setEditingEmployee(employeeToEdit);
//     // };

//     // const handleSaveEdit = (updatedEmployee) => {
//     //     const updatedEmployees = employees.map(employee =>
//     //         employee.id === updatedEmployee.id ? updatedEmployee : employee
//     //     );
//     //     setEmployees(updatedEmployees);
//     //     setEditingEmployee(null); // Clear editing state
//     // };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (editingEmployee) {
//             setEditingEmployee(prevEmployee => ({
//                 ...prevEmployee,
//                 [name]: value
//             }));
//         } else {
//             setNewEmployee(prevNewEmployee => ({
//                 ...prevNewEmployee,
//                 [name]: value
//             }));
//         }
//     };

//     // const handleCancelEdit = () => {
//     //     setEditingEmployee(null); // Clear editing state
//     // };

//     const handleDelete = (id) => {
//         const updatedEmployees = employees.filter(employee => employee.id !== id);
//         setEmployees(updatedEmployees);
//     };

//     const handleAddNew = () => {
//         setShowAddForm(true);
//     };

//     const handleSaveNewEmployee = () => {
//         const newId = employees.length + 1;
//         const newEmployeeWithId = { ...newEmployee, id: newId };
//         setEmployees([...employees, newEmployeeWithId]);
//         setShowAddForm(false);
//         setNewEmployee({
//             name: '',
//             email: '',
//             phone: '',
//             employeeId: '',
//             address: '',
//             avatar: null
//         });
//     };

//     const handleCancelAdd = () => {
//         setShowAddForm(false);
//         setNewEmployee({
//             name: '',
//             email: '',
//             phone: '',
//             employeeId: '',
//             address: '',
//             avatar: null
//         });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();

//         reader.onload = () => {
//             const imageUrl = reader.result;
//             if (editingEmployee) {
//                 setEditingEmployee(prevEmployee => ({
//                     ...prevEmployee,
//                     avatar: imageUrl
//                 }));
//             } else {
//                 setNewEmployee(prevNewEmployee => ({
//                     ...prevNewEmployee,
//                     avatar: imageUrl
//                 }));
//             }
//         };

//         reader.readAsDataURL(file);
//     };
//     const fileInputRef = useRef(null);

//     const handleClick = () => {
//         fileInputRef.current.click();
//     };

//     return (
//         <>
//             <div className='employee-heading'>
//                 {error && <p>{error}</p>}
//                 <button className='dashboard-btn ms-auto' onClick={handleAddNew}>Add New</button>
//             </div>
//             <div>
//                 <Modal
//                     visible={showAddForm}
//                     onCancel={handleCancelAdd}
//                     footer={null}
//                     className='add-popup'
//                 >
//                     <div className='popup-bg'>
//                         <div className='add-employee-heading'>
//                             <h3>Add New Employee</h3>
//                         </div>
//                         <div className='add-employee-avtar'>
//                             <Avatar style={{ border: '1px solid' }} src={editingEmployee ? editingEmployee.avatar : newEmployee.avatar} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                            

//                             <input
//                                 ref={fileInputRef}
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleImageChange}
//                                 style={{ display: 'none' }}
//                             />
//                             <button className='dashboard-btn' onClick={handleClick}>Upload Image</button>

//                         </div>
//                         <div className='add-employee-form'>
//                             <div>
//                                 <input autoComplete="off" className='form-input' type="text" name="name" placeholder="Name" value={newEmployee.name} onChange={handleChange} />
//                                 <input autoComplete="off" className='form-input' type="email" name="email" placeholder="Email" value={newEmployee.email} onChange={handleChange} />
//                                 <input autoComplete="off" className='form-input' type="text" name="phone" placeholder="Phone" value={newEmployee.phone} onChange={handleChange} />
//                                 <input autoComplete="off" className='form-input' type="text" name="employeeId" placeholder="Employee ID" value={newEmployee.employeeId} onChange={handleChange} />
//                             </div>
//                             <div style={{textAlign:'end'}}>
//                                 <input autoComplete="off" className='form-input' type="text" name="address" placeholder="Address" value={newEmployee.address} onChange={handleChange} />
//                                 <input autoComplete="off" className='form-input' type="text" name="joindate" placeholder="Join Date" />
//                                 <input autoComplete="off" className='form-input' type="text" name="salary" placeholder="Salary" />
//                                 <button className='dashboard-btn' onClick={handleSaveNewEmployee}>Save</button>
//                             </div>
//                         </div>
//                     </div>
//                 </Modal>
//             </div>
//             <div className='employee-table'>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>S.No</th>
//                                 <th>Name</th>
//                                 <th>Email ID</th>
//                                 <th>Phone</th>
//                                 <th>Employee ID</th>
//                                 <th>Address</th>
//                                 <th>Edit</th>
//                                 <th>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {employees.map((employee, index) => (
//                                 <tr key={index}>
//                                     <td>{index + 1}</td>
//                                     <td>
//                                         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                                             {editingEmployee && editingEmployee.id === employee.id ? (
//                                                 <>
//                                                     <input autoComplete="off" className='add-new-input' style={{ border: '1px solid #767676' }} type="file" accept="image/*" name="avatar" onChange={handleImageChange} />
//                                                     {editingEmployee.avatar && typeof editingEmployee.avatar === 'object' && (
//                                                         <img src={URL.createObjectURL(editingEmployee.avatar)} alt="Avatar Preview" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
//                                                     )}
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <Avatar src={employee.avatar} alt="" style={{ width: '35px', height: '35px', marginRight: '0px' }} />
//                                                 </>
//                                             )}
//                                             {editingEmployee && editingEmployee.id === employee.id ? (
//                                                 <input autoComplete="off" className='add-new-input' type="text" name="name" value={editingEmployee.name} onChange={handleChange} />
//                                             ) : (
//                                                 <span>{employee.name}</span>
//                                             )}
//                                         </div>
//                                     </td>
//                                     <td>{editingEmployee && editingEmployee.id === employee.id ? (
//                                         <input autoComplete="off" className='add-new-input' type="text" name="email" value={editingEmployee.email} onChange={handleChange} />
//                                     ) : (
//                                         employee.email
//                                     )}</td>
//                                     <td>{editingEmployee && editingEmployee.id === employee.id ? (
//                                         <input autoComplete="off" className='add-new-input' type="text" name="phone" value={editingEmployee.phone} onChange={handleChange} />
//                                     ) : (
//                                         employee.phone
//                                     )}</td>
//                                     <td>{editingEmployee && editingEmployee.id === employee.id ? (
//                                         <input autoComplete="off" className='add-new-input' type="text" name="employeeId" value={editingEmployee.employeeId} onChange={handleChange} />
//                                     ) : (
//                                         employee.employeeId
//                                     )}</td>
//                                     <td>{editingEmployee && editingEmployee.id === employee.id ? (
//                                         <input autoComplete="off" className='add-new-input' type="text" name="address" value={editingEmployee.address} onChange={handleChange} />
//                                     ) : (
//                                         employee.address
//                                     )}</td>
//                                     <td>
//                                         {editingEmployee && editingEmployee.id === employee.id ? (
//                                             <>
//                                                 <button onClick={() => handleSaveEdit(editingEmployee)}>Save</button>
//                                                 <button onClick={handleCancelEdit}>Cancel</button>
//                                             </>
//                                         ) : (
//                                             <button onClick={() => handleEdit(employee.id)}><img src={require("../../Assets/images/Edit.png")} alt='' /></button>
//                                         )}
//                                     </td>
//                                     <td>
//                                         <button onClick={() => handleDelete(employee.id)}><img src={require("../../Assets/images/Delete.png")} alt='' /></button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//             </div>

//         </>
//     );
// }

// export default EmployeePage;
