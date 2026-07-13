import React, { useEffect, useState } from "react";

const UpdateRateModal = ({
  show,
  onClose,
  selectedRate,
  onSave,
}) => {

  const [formData, setFormData] = useState({
    item: "",
    rate: "",
    date: "",
  });

  useEffect(() => {

    if (selectedRate) {

      setFormData({
        item: selectedRate.item,
        rate: selectedRate.rate,
        date: selectedRate.updated,
      });

    } else {

      setFormData({
        item: "",
        rate: "",
        date: "",
      });

    }

  }, [selectedRate, show]);

  if (!show) return null;

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.item ||
      !formData.rate ||
      !formData.date
    ) {
      alert("Please fill all fields.");
      return;
    }

    onSave(formData);

  };

  return (

    <div className="modal-overlay">

      <div className="rate-modal">

        <div className="modal-header">

          <h3>
            {selectedRate ? "Update Daily Rate" : "Add Daily Rate"}
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

            <label>Scrap Item</label>

            <input
              type="text"
              name="item"
              value={formData.item}
              onChange={handleChange}
              placeholder="Enter Scrap Item"
              readOnly={selectedRate ? true : false}
            />

          </div>

          <div className="form-group">

            <label>Rate Per Kg (₹)</label>

            <input
              type="number"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              placeholder="Enter Rate"
            />

          </div>

          <div className="form-group">

            <label>Effective Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

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
              {selectedRate ? "Update" : "Save"}
            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default UpdateRateModal;