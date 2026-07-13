import React, { useState } from "react";
import "../styles/changePassword.css";

const ChangePassword = () => {

    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.newPassword !== password.confirmPassword) {
            alert("New Password and Confirm Password do not match!");
            return;
        }

        alert("Password Updated Successfully!");

        setPassword({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    return (

        <div className="change-password">

            <h3>Change Password</h3>

            <form
                className="password-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group">

                    <label>Current Password</label>

                    <input
                        type="password"
                        name="currentPassword"
                        value={password.currentPassword}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>New Password</label>

                    <input
                        type="password"
                        name="newPassword"
                        value={password.newPassword}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>Confirm Password</label>

                    <input
                        type="password"
                        name="confirmPassword"
                        value={password.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-buttons">

                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Update Password
                    </button>

                </div>

            </form>

        </div>

    );
};

export default ChangePassword;