import React from "react";
import ScrapItemForm from "./ScrapItemForm";
import "../styles/scrapItemModal.css";

const ScrapItemModal = ({
    isOpen,
    onClose,
    onSave,
    editingItem,
}) => {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                <div className="modal-header">
                   <h2>
    {editingItem ? "Edit Scrap Item" : "Add Scrap Item"}
</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                <ScrapItemForm
    onSave={onSave}
    editingItem={editingItem}
/>

            </div>
        </div>
    );
};

export default ScrapItemModal;