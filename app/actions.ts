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
