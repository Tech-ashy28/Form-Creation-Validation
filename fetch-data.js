async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear existing content (loading message)
    dataContainer.innerHTML = "";

    // Create a list
    const userList = document.createElement("ul");

    // Loop through users and append list items
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

// Run the fetchUserData function after the DOM loads
document.addEventListener("DOMContentLoaded", fetchUserData);
