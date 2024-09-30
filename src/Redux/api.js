export const signup = async (url, formData) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    // throw new Error('Signup failed');
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
};

export const login = async (url, formData) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error("login failed");
  }
  return response.json();
};

export const joinNetwork = async (url, formData) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error("failed join network");
  }
  return response.json();
};

export const getintouch = async (url, formData) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error("failed to get in touch");
  }
  return response.json();
};

export const NewsLetter = async (url, formData) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error("failed to subcribe Newsletter");
  }
  return response.json();
};

export const addEmployee = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/add_employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add new employee");
    }

    const addedEmployee = await response.json();
    return addedEmployee;
  } catch (error) {
    throw new Error("Failed to add new employee: " + error.message);
  }
};

export const getEmployees = async () => {
  try {
    const response = await fetch("http://localhost:3000/get_employee");
    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }
    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    } else {
      console.error("Data received is not an array", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw new Error("Failed to fetch employees");
  }
};

export const updateEmployee = async (formData, employeeId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/update_employee/${employeeId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update employee");
    }

    const updatedEmployee = await response.json();
    return updatedEmployee;
  } catch (error) {
    throw new Error("Failed to update employee: " + error.message);
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/delete_employee/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete employee");
    }

    return id; // Return the ID of the deleted employee
  } catch (error) {
    console.error("Failed to delete employee:", error);
    throw new Error("Failed to delete employee");
  }
};

export const saveQA = async (question, answer) => {
  try {
    const response = await fetch("http://localhost:3000/questionanswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, answer }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to save Q&A:", error);
    throw new Error("Failed to save Q&A");
  }
};

export const fetchUserDetails = async (userId, token) => {
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
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchNotifications = async (userId, token) => {
  try {
    const url = `http://localhost:3000/get_notification/${userId}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch notifications");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
