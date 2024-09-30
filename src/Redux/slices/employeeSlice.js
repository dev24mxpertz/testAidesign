import { createSlice } from '@reduxjs/toolkit';
import { addEmployee, getEmployees, updateEmployee, deleteEmployee } from '../api';
import { toast } from 'react-toastify';

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    getEmployeesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getEmployeesSuccess: (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    },
    getEmployeesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addEmployeeRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addEmployeeSuccess: (state, action) => {
      state.loading = false;
      state.employees.push(action.payload);
    },
    addEmployeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateEmployeeRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateEmployeeSuccess: (state, action) => {
      state.loading = false;
      state.employees = state.employees.map((employee) =>
        employee._id === action.payload._id ? action.payload : employee
      );
    },
    updateEmployeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteEmployeeRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteEmployeeSuccess: (state, action) => {
      state.loading = false;
      state.employees = state.employees.filter(
        (employee) => employee._id !== action.payload
      );
    },
    deleteEmployeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getEmployeesRequest,
  getEmployeesSuccess,
  getEmployeesFailure,
  addEmployeeRequest,
  addEmployeeSuccess,
  addEmployeeFailure,
  updateEmployeeRequest,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  deleteEmployeeRequest,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
} = employeeSlice.actions;

export const fetchEmployees = () => async (dispatch) => {
  dispatch(getEmployeesRequest());
  try {
    const employees = await getEmployees();
    dispatch(getEmployeesSuccess(employees));
  } catch (error) {
    dispatch(getEmployeesFailure(error.message));
    console.error('Error fetching employees:', error);
    toast.error('Failed to fetch employees. Please try again.');
  }
};

export const addNewEmployee = (formData) => async (dispatch) => {
  dispatch(addEmployeeRequest());
  try {
    const newEmployee = await addEmployee(formData);
    dispatch(addEmployeeSuccess(newEmployee));
    toast.success('Employee added successfully!');
  } catch (error) {
    dispatch(addEmployeeFailure(error.message));
    console.error('Error adding employee:', error);
    toast.error('Failed to add employee. Please try again.');
  }
};

export const updateExistingEmployee = (formData, id) => async (dispatch) => {
  dispatch(updateEmployeeRequest());
  try {
    const updatedEmployee = await updateEmployee(formData, id);
    dispatch(updateEmployeeSuccess(updatedEmployee));
    toast.success('Employee updated successfully!');
  } catch (error) {
    dispatch(updateEmployeeFailure(error.message));
    console.error('Error updating employee:', error);
    toast.error('Failed to update employee. Please try again.');
  }
};

export const removeEmployee = (id) => async (dispatch) => {
  dispatch(deleteEmployeeRequest());
  try {
    await deleteEmployee(id);
    dispatch(deleteEmployeeSuccess(id));
    toast.success('Employee deleted successfully!');
  } catch (error) {
    dispatch(deleteEmployeeFailure(error.message));
    console.error('Error deleting employee:', error);
    toast.error('Failed to delete employee. Please try again.');
  }
};

export default employeeSlice.reducer;
