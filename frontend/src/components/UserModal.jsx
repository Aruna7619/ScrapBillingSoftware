import React from "react";
import UserForm from "./UserForm";
import "../styles/userModal.css";

const UserModal = ({
    isOpen,
    onClose,
    onSave,
    editingUser,
}) => {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">

            <div className="modal-content">

                <div className="modal-header">

                    <h2>
                        {editingUser ? "Edit User" : "Add User"}
                    </h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ×
                    </button>

                </div>

                <UserForm
                    onSave={onSave}
                    onClose={onClose}
                    editingUser={editingUser}
                />

            </div>

        </div>
    );
};

export default UserModal;