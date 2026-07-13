import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const BillingTable = ({
  items,
  onDelete,
  onEdit,
  onClearBill,
}) => {

  const grandTotal = items.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  return (
    <div className="billing-table-container">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3>Added Scrap Items</h3>

        {items.length > 0 && (
          <button
            className="delete-btn"
            onClick={onClearBill}
          >
            Clear Bill
          </button>
        )}

      </div>

      <div className="table-responsive">

        <table className="billing-table">

          <thead>

            <tr>

              <th>Sl No</th>

              <th>Scrap Item</th>

              <th>Rate/Kg</th>

              <th>Weight</th>

              <th>Amount</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {items.length > 0 ? (

              items.map((item, index) => (

                <tr key={index}>

                  <td>{index + 1}</td>

                  <td>{item.item}</td>

                  <td>₹ {item.rate}</td>

                  <td>{item.weight} Kg</td>

                  <td>₹ {item.amount}</td>

                  <td>

                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >

                      <button
                        className="edit-btn"
                        onClick={() => onEdit(index)}
                      >
                        <FaEdit /> Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => onDelete(index)}
                      >
                        <FaTrash /> Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    padding: "25px",
                  }}
                >
                  No Scrap Items Added
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      <div className="grand-total">

        <h2>

          Grand Total :
          <span> ₹ {grandTotal.toFixed(2)}</span>

        </h2>

      </div>

    </div>
  );
};

export default BillingTable;