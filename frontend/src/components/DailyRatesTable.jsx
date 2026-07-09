import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DailyRatesTable = ({ rates, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="daily-rates-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Scrap Item</th>
            <th>Unit</th>
            <th>Today's Rate (₹/Kg)</th>
            <th>Last Updated</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {rates.length > 0 ? (
            rates.map((rate, index) => (
              <tr key={rate.id}>
                <td>{index + 1}</td>
                <td>{rate.item}</td>
                <td>{rate.unit}</td>
                <td>₹ {rate.rate}</td>
                <td>{rate.updated}</td>

                <td>
                  <div className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() => onEdit(rate)}
                    >
                      <FaEdit /> Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(rate.id)}
                    >
                      <FaTrash /> Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "25px" }}>
                No Daily Rates Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DailyRatesTable;