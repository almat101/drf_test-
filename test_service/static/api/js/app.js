// Fetch and display all users
const fetchUsers = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/users/');
    const users = await response.json();

    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = '<h2>Users</h2>'; // Reset user container
    users.forEach(user => {
        const userDiv = document.createElement('div');

        // Create user display with Details, Update, and Delete buttons
        userDiv.innerHTML = `
            <span>Name: ${user.first_name}, Age: ${user.age}</span>
            <button onclick="getUser(${user.id})" style="margin-left: 10px;">Details</button>
            <button onclick="showUpdateForm(${user.id})" style="margin-left: 10px;">Update</button>
            <button onclick="deleteUser(${user.id})" style="margin-left: 10px;">Delete</button>
        `;
        userContainer.appendChild(userDiv);
    });
};

// Add a new user
const createUser = async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('first_name').value;
    const age = document.getElementById('age').value;

    const response = await fetch('http://127.0.0.1:8000/api/users/post/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name: firstName, age: age }),
    });

    if (response.status === 201) {
        alert('User added successfully!');
        fetchUsers(); // Refresh the user list
    } else {
        alert('Error adding user');
    }
};

// Get details of a user by pk
const getUser = async (pk) => {
    const response = await fetch(`http://127.0.0.1:8000/api/users/${pk}/`, {
        method: 'GET',
    });

    if (response.ok) {
        const user = await response.json();
        alert(`User Details:\nName: ${user.first_name}\nAge: ${user.age}`);
    } else {
        alert(`Error fetching details for user with ID ${pk}`);
    }
};

// Show update form for a user
const showUpdateForm = (pk) => {
    const updateForm = document.getElementById('update-form');
    updateForm.style.display = 'block';

    // Add event listener for form submission (bind to specific user ID)
    updateForm.onsubmit = (event) => updateUser(event, pk);
};

// Update a user by pk
const updateUser = async (event, pk) => {
    event.preventDefault();

    const updatedFirstName = document.getElementById('update_first_name').value;
    const updatedAge = document.getElementById('update_age').value;

    const response = await fetch(`http://127.0.0.1:8000/api/users/${pk}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name: updatedFirstName, age: updatedAge }),
    });

    if (response.ok) {
        alert(`User with ID ${pk} updated successfully!`);
        fetchUsers(); // Refresh the user list
        document.getElementById('update-form').style.display = 'none'; // Hide update form
    } else {
        alert(`Error updating user with ID ${pk}`);
    }
};

// Delete a user by pk
const deleteUser = async (pk) => {
    const response = await fetch(`http://127.0.0.1:8000/api/users/${pk}/`, {
        method: 'DELETE',
    });

    if (response.status === 204) {
        alert(`User with ID ${pk} deleted successfully!`);
        fetchUsers(); // Refresh the user list
    } else {
        alert(`Error deleting user with ID ${pk}`);
    }
};

// Attach event listeners
document.getElementById('user-form').addEventListener('submit', createUser);

// Initial fetch of users
fetchUsers();
