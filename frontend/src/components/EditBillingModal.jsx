import React, { useState, useEffect } from "react";

const EditBillingModal = ({
  show,
  onClose,
  item,
  onSave,
}) => {

  const scrapItems = [
    { name: "Iron Scrap", rate: 35 },
    { name: "Copper Scrap", rate: 720 },
    { name: "Aluminium Scrap", rate: 180 },
    { name: "Plastic Scrap", rate: 20 },
  ];

  const [formData, setFormData] = useState({
    item: "",
    rate: "",
    weight: "",
    amount: "",
  });

  useEffect(() => {
    if (item) {
      setFormData(item);
    }
  }, [item]);

  const handleItemChange = (value) => {
    const selected = scrapItems.find((i) => i.name === value);

    const rate = selected ? selected.rate : "";

    const amount = (Number(rate) * Number(formData.weight)).toFixed(2);

    setFormData({
      ...formData,
      item: value,
      rate,
      amount,
    });
  };

  const handleWeightChange = (value) => {

    const amount =
      (Number(formData.rate) * Number(value)).toFixed(2);

    setFormData({
      ...formData,
      weight: value,
      amount,
    });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!show) return null;

  return (

    <div className="modal-overlay">

      <div className="rate-modal">

        <div className="modal-header">

          <h3>Edit Scrap Item</h3>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <div className="form-group">

          <label>Scrap Item</label>

          <select
            value={formData.item}
            onChange={(e) =>
              handleItemChange(e.target.value)
            }
          >

            {scrapItems.map((item, index) => (

              <option
                key={index}
                value={item.name}
              >
                {item.name}
              </option>

            ))}

          </select>

        </div>

        <div className="form-group">

          <label>Rate / Kg</label>

          <input
            type="number"
            value={formData.rate}
            readOnly
          />

        </div>

        <div className="form-group">

          <label>Weight</label>

          <input
            type="number"
            value={formData.weight}
            onChange={(e) =>
              handleWeightChange(e.target.value)
            }
          />

        </div>

        <div className="form-group">

          <label>Amount</label>

          <input
            type="number"
            value={formData.amount}
            readOnly
          />

        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleSubmit}
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>

  );
};

export default EditBillingModal;