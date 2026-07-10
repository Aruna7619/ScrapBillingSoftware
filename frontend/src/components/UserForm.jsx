import React, { useState, useEffect } from "react";
import "../styles/userForm.css";

const UserForm = ({
    onSave,
    onClose,
    editingUser,
}) => {

    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        role: "Staff",
        status: "Active",
    });

    useEffect(() => {
        if (editingUser) {
            setFormData({
                ...editingUser,
                password: "",
            });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
        onSave({
            ...formData,
            id: editingUser.id,
        });
    } else {
        onSave(formData);
    }
};

    return (

        <form className="user-form" onSubmit={handleSubmit}>

            <div className="form-group">
                <label>Full Name</label>

                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    required
                />
            </div>

            <div className="form-group">
                <label>Username</label>

                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter Username"
                    required
                />
            </div>

            <div className="form-group">
                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                />
            </div>

            <div className="form-group">
                <label>Password</label>

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    required={!editingUser}
                />
            </div>

            <div className="form-group">
                <label>Role</label>

                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Staff</option>
                </select>
            </div>

            <div className="form-group">
                <label>Status</label>

                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>

            <div className="form-buttons">

                <button
                    type="submit"
                    className="save-btn"
                >
                    Save
                </button>

                <button
                    type="button"
                    className="cancel-btn"
                    onClick={onClose}
                >
                    Cancel
                </button>

            </div>

        </form>

    );
};

export default UserForm;