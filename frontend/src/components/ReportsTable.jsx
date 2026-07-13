import React from "react";
import { FaEye } from "react-icons/fa";

const ReportsTable = ({ reports, onView }) => {

  return (

    <div className="table-responsive">

      <table className="reports-table">

        <thead>

          <tr>
            <th>Sl No</th>
            <th>Bill No</th>
            <th>Date</th>
            <th>Vendor</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {reports.length > 0 ? (

            reports.map((report, index) => (

              <tr key={report.id}>

                <td>{index + 1}</td>

                <td>{report.id}</td>

                <td>{report.date}</td>

                <td>{report.vendor}</td>

                <td>₹ {report.amount}</td>

                <td>

                  <span
                    className={
                      report.status === "Paid"
                        ? "status-paid"
                        : "status-pending"
                    }
                  >
                    {report.status}
                  </span>

                </td>

                <td>

                  <button
                    className="view-btn"
                    onClick={() => onView(report)}
                  >
                    <FaEye /> View
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="7"
                style={{
                  textAlign: "center",
                  padding: "25px",
                }}
              >
                No Reports Found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

};

export default ReportsTable;