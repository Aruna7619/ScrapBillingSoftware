import React from "react";
import "../styles/scrapItemTable.css";

const ScrapItemTable = ({
  scrapItems,
  onEdit,
  onDelete,
}) => {


  return (
    <div className="table-responsive">
    <table className="scrap-table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Unit</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {scrapItems.map((item) => (

          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.itemName}</td>
            <td>{item.unit}</td>
            <td>
              <span
                className={
                  item.status === "Active"
                    ? "status active"
                    : "status inactive"
                }
              >
                {item.status}
              </span>
            </td>

            <td>

              <button
                className="edit-btn-scrap"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>

              <button
                className="delete-btn-scrap"
                onClick={() => onDelete(item)}
              >
                Delete
              </button>
            </td>

          </tr>

        ))}

      </tbody>

    </table>
    </div>
  );
};

export default ScrapItemTable;