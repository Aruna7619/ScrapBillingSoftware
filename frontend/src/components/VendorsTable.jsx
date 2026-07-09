import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const VendorsTable = ({ vendors, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="vendors-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Vendor Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {vendors.length > 0 ? (
            vendors.map((vendor, index) => (
              <tr key={vendor.id}>
                <td>{index + 1}</td>

                <td>{vendor.name}</td>

                <td>{vendor.phone}</td>

                <td>{vendor.address}</td>

                <td>
                  <span
                    className={
                      vendor.status === "Active"
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {vendor.status}
                  </span>
                </td>

                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => onEdit(vendor)}
                    >
                      <FaEdit /> Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(vendor.id)}
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
                style={{ textAlign: "center", padding: "25px" }}
              >
                No Vendors Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VendorsTable;