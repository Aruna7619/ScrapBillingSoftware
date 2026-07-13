import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import BillingForm from "../components/BillingForm";
import BillingTable from "../components/BillingTable";
import BillPreview from "../components/BillPreview";
import EditBillingModal from "../components/EditBillingModal";

import "../styles/billing.css";
import "../styles/invoice.css";

const Billing = () => {
  const [selectedVendor, setSelectedVendor] = useState("");

  const [billItems, setBillItems] = useState([]);

  const [showInvoice, setShowInvoice] = useState(false);

  // Edit Modal
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);

  // Add Scrap Item
  const handleAddItem = (item) => {
    setBillItems([...billItems, item]);
  };

  // Open Edit Modal
  const handleEdit = (index) => {
    setSelectedIndex(index);
    setSelectedItem(billItems[index]);
    setShowEditModal(true);
  };

  // Save Edited Item
  const handleSaveEdit = (updatedItem) => {
    const updatedItems = [...billItems];

    updatedItems[selectedIndex] = updatedItem;

    setBillItems(updatedItems);

    setShowEditModal(false);
  };

  // Delete One Item
  const handleDelete = (index) => {
    if (window.confirm("Delete this item?")) {
      const updated = billItems.filter((_, i) => i !== index);

      setBillItems(updated);

      if (updated.length === 0) {
        setSelectedVendor("");
        setShowInvoice(false);
      }
    }
  };

  // Clear Entire Bill
  const handleClearBill = () => {
    if (window.confirm("Clear complete bill?")) {
      setBillItems([]);
      setSelectedVendor("");
      setShowInvoice(false);
    }
  };

  // Save Bill
  const handleSaveBill = () => {
    if (billItems.length === 0) {
      alert("Please add scrap items.");
      return;
    }

    alert("Bill Saved Successfully");
  };

  // Preview Invoice
  const handleGeneratePDF = () => {
    if (billItems.length === 0) {
      alert("Please add scrap items.");
      return;
    }

    setShowInvoice(true);

    setTimeout(() => {
      document
        .getElementById("invoice")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 200);
  };

  // Print Invoice
  const handlePrint = () => {
    if (!showInvoice) {
      alert("Preview Invoice First");
      return;
    }

    window.print();
  };

  return (
    <AdminLayout>
      <div className="billing-page">

        <div className="page-header">
          <div>
            <h2>Purchase Billing</h2>
            <p>Create Scrap Purchase Bill</p>
          </div>
        </div>

        <BillingForm
          onAddItem={handleAddItem}
          selectedVendor={selectedVendor}
          setSelectedVendor={setSelectedVendor}
          vendorLocked={billItems.length > 0}
        />

        <BillingTable
          items={billItems}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onClearBill={handleClearBill}
        />

        <div className="billing-buttons">

          <button
            className="save-btn"
            onClick={handleSaveBill}
          >
            Save Bill
          </button>

          <button
            className="pdf-btn"
            onClick={handleGeneratePDF}
          >
            Preview Invoice
          </button>

          {showInvoice && (
            <button
              className="print-btn"
              onClick={handlePrint}
            >
              Print Invoice
            </button>
          )}

        </div>

        {showInvoice && (
          <div style={{ marginTop: "40px" }}>
            <BillPreview
              vendor={selectedVendor}
              items={billItems}
            />
          </div>
        )}

        {/* Edit Modal */}

        <EditBillingModal
          show={showEditModal}
          item={selectedItem}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveEdit}
        />

      </div>
    </AdminLayout>
  );
};

export default Billing;