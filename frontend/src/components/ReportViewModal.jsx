import React from "react";
import { FaTimes } from "react-icons/fa";
import BillPreview from "./BillPreview";

const ReportViewModal = ({
  show,
  onClose,
  report,
}) => {

  if (!show || !report) return null;

  // Dummy items (later these will come from database)
  const billItems = [
    {
      item: "Iron Scrap",
      rate: 35,
      weight: 50,
      amount: 1750,
    },
    {
      item: "Copper Scrap",
      rate: 720,
      weight: 10,
      amount: 7200,
    },
    {
      item: "Plastic Scrap",
      rate: 20,
      weight: 15,
      amount: 300,
    },
  ];

  return (

    <div className="modal-overlay">

      <div
        className="report-modal"
        style={{
          width: "90%",
          maxWidth: "1100px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >

        <div className="modal-header">

          <h2>Purchase Invoice</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>

        <BillPreview
          vendor={report.vendor}
          items={billItems}
        />

      </div>

    </div>

  );

};

export default ReportViewModal;