import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import DailyRatesTable from "../components/DailyRatesTable";
import UpdateRateModal from "../components/UpdateRateModal";
import "../styles/dailyRates.css";

const DailyRates = () => {

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [selectedRate, setSelectedRate] = useState(null);

  const [rates, setRates] = useState([
    {
      id: 1,
      item: "Iron Scrap",
      unit: "Kg",
      rate: 35,
      updated: "2026-07-10",
    },
    {
      id: 2,
      item: "Copper Scrap",
      unit: "Kg",
      rate: 720,
      updated: "2026-07-10",
    },
    {
      id: 3,
      item: "Aluminium Scrap",
      unit: "Kg",
      rate: 180,
      updated: "2026-07-10",
    },
    {
      id: 4,
      item: "Plastic Scrap",
      unit: "Kg",
      rate: 20,
      updated: "2026-07-10",
    },
  ]);

  const filteredRates = rates.filter((rate) =>
    rate.item.toLowerCase().includes(search.toLowerCase())
  );

  // Open Edit Modal
  const handleEdit = (rate) => {
    setSelectedRate(rate);
    setShowModal(true);
  };

  // Delete Rate
  const handleDelete = (id) => {

    if (window.confirm("Are you sure you want to delete this rate?")) {

      setRates(rates.filter((rate) => rate.id !== id));

      alert("Rate Deleted Successfully!");

    }

  };

  // Add / Update Rate
  const handleSaveRate = (data) => {

    if (selectedRate) {

      // Update Existing Rate
      setRates(
        rates.map((rate) =>
          rate.id === selectedRate.id
            ? {
                ...rate,
                item: data.item,
                rate: Number(data.rate),
                updated: data.date,
              }
            : rate
        )
      );

      alert("Rate Updated Successfully!");

    } else {

      // Add New Rate
      const newRate = {
        id: Date.now(),
        item: data.item,
        unit: "Kg",
        rate: Number(data.rate),
        updated: data.date,
      };

      setRates([...rates, newRate]);

      alert("Rate Added Successfully!");

    }

    setShowModal(false);

    setSelectedRate(null);

  };

  return (

    <AdminLayout>

      <div className="daily-rates-page">

        <div className="page-header">

          <div>

            <h2>Daily Rates</h2>

            <p>Manage today's scrap rates per kilogram.</p>

          </div>

          <button
            className="add-rate-btn"
            onClick={() => {
              setSelectedRate(null);
              setShowModal(true);
            }}
          >
            + Update Rates
          </button>

        </div>

        <div className="search-section">

          <input
            type="text"
            placeholder="Search Scrap Item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <DailyRatesTable
          rates={filteredRates}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <UpdateRateModal
          show={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedRate(null);
          }}
          selectedRate={selectedRate}
          onSave={handleSaveRate}
        />

      </div>

    </AdminLayout>

  );

};

export default DailyRates;