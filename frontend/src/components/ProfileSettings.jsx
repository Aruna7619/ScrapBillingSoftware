import React, { useState } from "react";
import "../styles/profileSettings.css";

const ProfileSettings = () => {

    const [profile, setProfile] = useState({
        fullName: "Aruna",
        username: "aruna",
        email: "aruna@gmail.com",
        phone: "9876543210",
        profileImage: null,
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setProfile({
            ...profile,
            profileImage: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Profile Updated Successfully!");
    };

    return (

        <div className="profile-settings">

            <h3>Profile Settings</h3>

            <form
                className="profile-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group">
                    <label>Full Name</label>

                    <input
                        type="text"
                        name="fullName"
                        value={profile.fullName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Username</label>

                    <input
                        type="text"
                        name="username"
                        value={profile.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Phone</label>

                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group full-width">
                    <label>Profile Picture</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                <div className="form-buttons">
                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Update Profile
                    </button>
                </div>

            </form>

        </div>

    );
};

export default ProfileSettings;