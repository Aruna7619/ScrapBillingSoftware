import React, { useState, useEffect } from "react";
import "../styles/scrapItemForm.css";

const ScrapItemForm = ({ onSave, editingItem }) => {
    const [formData, setFormData] = useState({
    id: editingItem?.id || null,
    itemName: editingItem?.itemName || "",
    unit: editingItem?.unit || "Kg",
    description: editingItem?.description || "",
    status: editingItem?.status || "Active",
});
const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const validate = () => {
    let newErrors = {};

    if (!formData.itemName.trim()) {
        newErrors.itemName = "Item Name is required";
    }

    if (!formData.unit) {
        newErrors.unit = "Please select a unit";
    }

    if (!formData.description.trim()) {
        newErrors.description = "Description is required";
    }

    if (!formData.status) {
        newErrors.status = "Please select status";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};
    const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
        return;
    }

    onSave(formData);
    setFormData({
    id: null,
    itemName: "",
    unit: "Kg",
    description: "",
    status: "Active",
});

setErrors({});
};

    useEffect(() => {
    if (editingItem) {
        setFormData(editingItem);
    } else {
        setFormData({
            id: null,
            itemName: "",
            unit: "Kg",
            description: "",
            status: "Active",
        });
    }
}, [editingItem]);

    return (

        <form className="scrap-form" onSubmit={handleSubmit}>

            <div className="form-group">

                <label>Item Name</label>

                <input
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleChange}
                    placeholder="Enter Item Name"
                />
                {errors.itemName && (
    <p className="error">{errors.itemName}</p>
)}

            </div>

            <div className="form-group">

                <label>Unit</label>

                <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                >

                    <option>Kg</option>

                    <option>Gram</option>

                    <option>Ton</option>

                </select>
                {errors.unit && (
    <p className="error">{errors.unit}</p>
)}

            </div>

            <div className="form-group">

                <label>Description</label>

                <textarea
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter Description"
                />
                {errors.description && (
    <p className="error">{errors.description}</p>
)}

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
                {errors.status && (
    <p className="error">{errors.status}</p>
)}

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
                >
                    Cancel
                </button>

            </div>

        </form>

    );
};

export default ScrapItemForm;