import React from "react";
import "../styles/deleteModal.css";

const DeleteModal = ({ isOpen, onClose, onDelete, item }) => {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">

            <div className="delete-modal">

                <h3>Delete Scrap Item</h3>

                <p>
                    Are you sure you want to delete
                    <strong> {item?.itemName}</strong> ?
                </p>

                <div className="delete-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="delete-btn"
                        onClick={onDelete}
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
};

export default DeleteModal;