import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import UserTable from "../components/UserTable";
import UserModal from "../components/UserModal";
import DeleteUserModal from "../components/DeleteUserModal";
import "../styles/userManagement.css";

const UserManagement = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            fullName: "Aruna",
            username: "aruna",
            email: "aruna@gmail.com",
            role: "Admin",
            status: "Active",
        },
        {
            id: 2,
            fullName: "Madhu",
            username: "madhu",
            email: "madhu@gmail.com",
            role: "Manager",
            status: "Active",
        },
    ]);

    const addUser = (newUser) => {

        const nextId =
            users.length > 0
                ? Math.max(...users.map(user => user.id)) + 1
                : 1;

        setUsers([
            ...users,
            {
                ...newUser,
                id: nextId,
            },
        ]);

        setIsModalOpen(false);

        alert("User added successfully!");
    };


    const handleEdit = (user) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };


    const updateUser = (updatedUser) => {

        setUsers(
            users.map((user) =>
                user.id === updatedUser.id
                    ? updatedUser
                    : user
            )
        );

        setEditingUser(null);
        setIsModalOpen(false);

        alert("User updated successfully!");
    };
    const handleDeleteClick = (user) => {

        setSelectedUser(user);

        setDeleteModalOpen(true);

    };
    const deleteUser = () => {

        setUsers(
            users.filter(
                (user) => user.id !== selectedUser.id
            )
        );

        setDeleteModalOpen(false);

        setSelectedUser(null);

        alert("User deleted successfully!");

    };

    const [searchTerm, setSearchTerm] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [editingUser, setEditingUser] = useState(null);

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null);

    const filteredUsers = users.filter((user) =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <AdminLayout>

            <div className="user-management-container">

                <div className="page-header">

                    <h2>User Management</h2>

                    <button
                        className="add-btn"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Add User
                    </button>

                </div>

                <div className="search-container">

                    <input
                        type="text"
                        placeholder="Search User..."
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                    />

                </div>

                <UserTable
                    users={filteredUsers}
                    onEdit={handleEdit}
                    onDelete={handleDeleteClick}
                />

            </div>

            <UserModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingUser(null);
                }}
                onSave={editingUser ? updateUser : addUser}
                editingUser={editingUser}
            />

            <DeleteUserModal
                isOpen={deleteModalOpen}
                user={selectedUser}
                onClose={() => setDeleteModalOpen(false)}
                onDelete={deleteUser}
            />

        </AdminLayout>

    );
};

export default UserManagement;