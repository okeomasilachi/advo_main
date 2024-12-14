"use server";

export async function fetchUserData(numberOfUsers: number) {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${numberOfUsers}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }

    const data = await response.json();

    // Parse only the required fields: name and picture path
    const users = data.results.map((user: any) => ({
      name: `${user.name.first} ${user.name.last}`,
      image: user.picture.medium,
    }));

    return users;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
}

export async function fetchEmployeeData() {
  try {
    const response = await fetch(
      "https://675d6aa663b05ed07977cdfe.mockapi.io/api/employees",
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch employees: ${response.statusText}`);
    }

    const data = await response.json();

    // Modify the image URL based on gender
    const employees = data.map((employee: any) => {
      const gender = employee.sex;
      const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
      if (gender === "male" || gender === "female") {
      employee.img = `https://randomuser.me/api/portraits/med/${gender === "male" ? "men" : "women"}/${randomNumber}.jpg`;
      }
      return employee;
    });

    return employees;
  } catch (error) {
    console.error("Error fetching employee data:", error);
    return [];
  }
}

export async function fetchEmployeeById(id: string) {
  try {
    const response = await fetch(
      `https://675d6aa663b05ed07977cdfe.mockapi.io/api/employees/${id}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch employee: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching employee data:", error);
    return null;
  }
}

export async function createEmployee(employeeData: any) {
  try {
    const response = await fetch(
      "https://675d6aa663b05ed07977cdfe.mockapi.io/api/employees",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to create employee: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating employee:", error);
    return null;
  }
}

export async function updateEmployee(id: string, employeeData: any) {
  try {
    const response = await fetch(
      `https://675d6aa663b05ed07977cdfe.mockapi.io/api/employees/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to update employee: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating employee:", error);
    return null;
  }
}

export async function deleteEmployee(id: string) {
  try {
    const response = await fetch(
      `https://675d6aa663b05ed07977cdfe.mockapi.io/api/employees/${id}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to delete employee: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting employee:", error);
    return null;
  }
}
