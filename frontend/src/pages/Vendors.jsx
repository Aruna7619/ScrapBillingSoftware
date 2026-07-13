import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import VendorsTable from "../components/VendorsTable";
import VendorModal from "../components/VendorModal";
import "../styles/vendors.css";

const Vendors = () => {

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [selectedVendor, setSelectedVendor] = useState(null);

  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      phone: "9876543210",
      address: "Mysore",
      status: "Active",
    },
    {
      id: 2,
      name: "Manjunath",
      phone: "9988776655",
      address: "Bangalore",
      status: "Active",
    },
    {
      id: 3,
      name: "Suresh",
      phone: "9123456780",
      address: "Mandya",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Ramesh",
      phone: "9000012345",
      address: "Hassan",
      status: "Active",
    },
  ]);

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  // Open Edit Modal
  const handleEdit = (vendor) => {
    setSelectedVendor(vendor);
    setShowModal(true);
  };

  // Delete Vendor
  const handleDelete = (id) => {

    if (window.confirm("Are you sure you want to delete this vendor?")) {

      setVendors(
        vendors.filter((vendor) => vendor.id !== id)
      );

      alert("Vendor Deleted Successfully!");

    }

  };

  // Add / Update Vendor
  const handleSaveVendor = (data) => {

    if (selectedVendor) {

      setVendors(
        vendors.map((vendor) =>
          vendor.id === selectedVendor.id
            ? {
                ...vendor,
                name: data.name,
                phone: data.phone,
                address: data.address,
                status: data.status,
              }
            : vendor
        )
      );

      alert("Vendor Updated Successfully!");

    } else {

      const newVendor = {
        id: Date.now(),
        name: data.name,
        phone: data.phone,
        address: data.address,
        status: data.status,
      };

      setVendors([...vendors, newVendor]);

      alert("Vendor Added Successfully!");

    }

    setShowModal(false);
    setSelectedVendor(null);

  };

  return (

    <AdminLayout>

      <div className="vendors-page">

        <div className="page-header">

          <div>

            <h2>Vendors</h2>

            <p>Manage scrap vendors and seller information.</p>

          </div>

          <button
            className="add-vendor-btn"
            onClick={() => {
              setSelectedVendor(null);
              setShowModal(true);
            }}
          >
            + Add Vendor
          </button>

        </div>

        <div className="search-section">

          <input
            type="text"
            placeholder="Search Vendor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <VendorsTable
          vendors={filteredVendors}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <VendorModal
          show={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedVendor(null);
          }}
          selectedVendor={selectedVendor}
          onSave={handleSaveVendor}
        />

      </div>

    </AdminLayout>

  );

};

export default Vendors;