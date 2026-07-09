import React, { useState } from "react";
import ScrapItemModal from "../components/ScrapItemModal";
import AdminLayout from "../components/AdminLayout";
import ScrapItemTable from "../components/ScrapItemTable";
import DeleteModal from "../components/DeleteModal";
import "../styles/scrapItems.css";

const ScrapItems = () => {
    const [searchTerm, setSearchTerm] = useState("");
   
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

const [selectedItem, setSelectedItem] = useState(null);
const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
};
const deleteScrapItem = () => {

    setScrapItems(
        scrapItems.filter(
            (item) => item.id !== selectedItem.id
        )
    );

    setDeleteModalOpen(false);

    setSelectedItem(null);
    alert("✅ Scrap Item deleted successfully!");
};
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
};
const updateScrapItem = (updatedItem) => {
    setScrapItems(
        scrapItems.map((item) =>
            item.id === updatedItem.id ? updatedItem : item
        )
    );

    setEditingItem(null);
    setIsModalOpen(false);
    alert("✅ Scrap Item updated successfully!");
};
    const [scrapItems, setScrapItems] = useState([
        {
            id: 1,
            itemName: "Iron Scrap",
            unit: "Kg",
            status: "Active",
            description: "Iron Materials",
        },
        {
            id: 2,
            itemName: "Copper Scrap",
            unit: "Kg",
            status: "Active",
            description: "Copper Materials",
        },
    ]);

     const filteredItems = scrapItems.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
);
   const addScrapItem = (newItem) => {

    const nextId =
        scrapItems.length > 0
            ? Math.max(...scrapItems.map(item => item.id)) + 1
            : 1;

    setScrapItems([
        ...scrapItems,
        {
            ...newItem,
            id: nextId,
        },
    ]);

    setIsModalOpen(false);
    alert("Scrap Item added successfully!");
};
    return (
        <AdminLayout>
            <div className="scrap-items-container">

                {/* Page Header */}
                <div className="page-header">
                    <h2>Scrap Items</h2>

                    <button
                        className="add-btn"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Add Scrap Item
                    </button>
                </div>

                {/* Search */}
                <div className="search-container">
                   <input
    type="text"
    placeholder="Search Scrap Item..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
/>
                </div>

                {/* Table */}
               <ScrapItemTable
    scrapItems={filteredItems}
    onEdit={handleEdit}
    onDelete={handleDeleteClick}
/>

            </div>

          <ScrapItemModal
    isOpen={isModalOpen}
    onClose={() => {
        setIsModalOpen(false);
        setEditingItem(null);
    }}
    onSave={editingItem ? updateScrapItem : addScrapItem}
    editingItem={editingItem}
/>

<DeleteModal
    isOpen={deleteModalOpen}
    item={selectedItem}
    onClose={() => setDeleteModalOpen(false)}
    onDelete={deleteScrapItem}
/>
        </AdminLayout>
    );
};

export default ScrapItems;