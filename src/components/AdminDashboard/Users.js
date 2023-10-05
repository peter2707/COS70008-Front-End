import React, { useState, useEffect } from 'react';
import './Dashboard.css';

export function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch from actual API
        // axios.get('/api/users')
        //     .then(response => {
        //         setUsers(response.data);
        //     })
        //     .catch(error => {
        //         console.error("Error fetching the users", error);
        //     });
        
        // Using mock data instead
        setUsers(fetchMockData());
    }, []);

    return (
        <div>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => editUser(user.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function editUser(userId) {
    // Logic to edit the user. Maybe navigate to an edit user page?
    console.log(`Editing user with ID: ${userId}`);
}

function fetchMockData() {
    return [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Alice Smith", email: "alice@example.com", role: "User" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" }
    ];
}
