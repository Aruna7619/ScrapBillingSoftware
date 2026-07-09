import React, { useEffect, useState } from "react";

const VendorModal = ({ show, onClose, selectedVendor }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    status: "Active",
  });

  useEffect(() => {
    if (selectedVendor) {
      setFormData(selectedVendor);
    } else {
      setFormData({
        name: "",
        phone: "",
        address: "",
        status: "Active",
      });
    }
  }, [selectedVendor]);

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Vendor Saved Successfully!");

    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="vendor-modal">

        <div className="modal-header">
          <h3>
            {selectedVendor ? "Edit Vendor" : "Add Vendor"}
          </h3>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Vendor Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Vendor Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              rows="3"
              required
            />
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

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default VendorModal;