import React, { useState, useEffect } from "react";

const BillingForm = ({
  onAddItem,
  selectedVendor,
  setSelectedVendor,
  vendorLocked,
}) => {
  const vendors = [
    "Ravi Kumar",
    "Manjunath",
    "Suresh",
    "Ramesh",
  ];

  const scrapItems = [
    { name: "Iron Scrap", rate: 35 },
    { name: "Copper Scrap", rate: 720 },
    { name: "Aluminium Scrap", rate: 180 },
    { name: "Plastic Scrap", rate: 20 },
  ];

  const [item, setItem] = useState("");
  const [rate, setRate] = useState("");
  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const selected = scrapItems.find((i) => i.name === item);

    if (selected) {
      setRate(selected.rate);
    } else {
      setRate("");
    }
  }, [item]);

  useEffect(() => {
    setAmount((Number(rate) * Number(weight)).toFixed(2));
  }, [rate, weight]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedVendor || !item || !weight) {
      alert("Please fill all fields");
      return;
    }

    onAddItem({
      item,
      rate,
      weight,
      amount,
    });

    setItem("");
    setRate("");
    setWeight("");
    setAmount(0);
  };

  return (
    <div className="billing-form">

      <h3>Purchase Billing</h3>

      <form onSubmit={handleSubmit}>

        <div className="form-row">

          <div className="form-group">

            <label>Vendor</label>

            <select
              value={selectedVendor}
              onChange={(e) => setSelectedVendor(e.target.value)}
              disabled={vendorLocked}
            >
              <option value="">Select Vendor</option>

              {vendors.map((vendor, index) => (
                <option key={index} value={vendor}>
                  {vendor}
                </option>
              ))}

            </select>

          </div>

          <div className="form-group">

            <label>Scrap Item</label>

            <select
              value={item}
              onChange={(e) => setItem(e.target.value)}
            >
              <option value="">Select Item</option>

              {scrapItems.map((scrap, index) => (
                <option key={index} value={scrap.name}>
                  {scrap.name}
                </option>
              ))}

            </select>

          </div>

        </div>

        <div className="form-row">

          <div className="form-group">

            <label>Rate / Kg</label>

            <input
              type="number"
              value={rate}
              readOnly
            />

          </div>

          <div className="form-group">

            <label>Weight (Kg)</label>

            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

          </div>

          <div className="form-group">

            <label>Amount</label>

            <input
              type="number"
              value={amount}
              readOnly
            />

          </div>

        </div>

        <button
          type="submit"
          className="add-item-btn"
        >
          + Add Item
        </button>

      </form>

    </div>
  );
};

export default BillingForm;