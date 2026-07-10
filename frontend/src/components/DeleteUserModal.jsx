import React from "react";
import "../styles/deleteUserModal.css";

const DeleteUserModal = ({
    isOpen,
    onClose,
    onDelete,
    user,
}) => {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">

            <div className="modal-content delete-modal">

                <h3>Delete User</h3>

                <p>
                    Are you sure you want to delete
                    <strong> {user?.fullName}</strong>?
                </p>

                <div className="modal-buttons">

                    <button
                        className="delete-btn"
                        onClick={onDelete}
                    >
                        Delete
                    </button>

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>
    );
};

export default DeleteUserModal;