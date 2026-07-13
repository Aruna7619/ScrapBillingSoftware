import React from "react";
import "../styles/userTable.css";

const UserTable = ({
    users,
    onEdit,
    onDelete,
}) => {

    return (
        <div className="table-responsive">
        <table className="user-table">

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {users.length > 0 ? (

                    users.map((user) => (

                        <tr key={user.id}>

                            <td>{user.id}</td>

                            <td>{user.fullName}</td>

                            <td>{user.username}</td>

                            <td>{user.email}</td>

                            <td>{user.role}</td>

                            <td>{user.status}</td>

                            <td>

                                <button
                                    className="edit-btn-new"
                                    onClick={() => onEdit(user)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn-new"
                                    onClick={() => onDelete(user)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))

                ) : (

                    <tr>

                        <td colSpan="7" className="no-data">
                            No Users Found
                        </td>

                    </tr>

                )}

            </tbody>

        </table>
        </div>

    );
};

export default UserTable;