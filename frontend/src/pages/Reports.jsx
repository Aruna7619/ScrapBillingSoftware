import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import ReportFilter from "../components/ReportFilter";
import ReportsTable from "../components/ReportsTable";
import ReportSummary from "../components/ReportSummary";
import ReportViewModal from "../components/ReportViewModal";

import "../styles/reports.css";

const Reports = () => {

  const [showModal, setShowModal] = useState(false);

  const [selectedReport, setSelectedReport] = useState(null);

const reportsData = [
  {
    id: "SB001",
    date: "10-07-2026",
    vendor: "Ravi Kumar",
    amount: 12500,
    status: "Paid",
  },
  {
    id: "SB002",
    date: "10-07-2026",
    vendor: "Manjunath",
    amount: 7800,
    status: "Paid",
  },
  {
    id: "SB003",
    date: "11-07-2026",
    vendor: "Suresh",
    amount: 19200,
    status: "Pending",
  },
];

  const [reports, setReports] = useState(reportsData);

  const handleView = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const handleSearch = (filters) => {

    let filtered = [...reportsData];

    // Vendor Filter
    if (filters.vendor !== "All Vendors") {
      filtered = filtered.filter(
        (report) => report.vendor === filters.vendor
      );
    }

    // Bill No Filter
    if (filters.billNo.trim() !== "") {
      filtered = filtered.filter((report) =>
        report.id
          .toLowerCase()
          .includes(filters.billNo.toLowerCase())
      );
    }

    // Date Filter
    if (filters.fromDate !== "") {
      filtered = filtered.filter(
        (report) =>
          new Date(report.date.split("-").reverse().join("-")) >=
          new Date(filters.fromDate)
      );
    }

    if (filters.toDate !== "") {
      filtered = filtered.filter(
        (report) =>
          new Date(report.date.split("-").reverse().join("-")) <=
          new Date(filters.toDate)
      );
    }

    setReports(filtered);
  };

  return (

    <AdminLayout>

      <div className="reports-page">

        <div className="page-header">

          <div>

            <h2>Reports</h2>

            <p>View Purchase Bills & Reports</p>

          </div>

        </div>

        <ReportFilter onSearch={handleSearch} />

        <ReportsTable
          reports={reports}
          onView={handleView}
        />

        <ReportSummary reports={reports} />

        <ReportViewModal
          show={showModal}
          onClose={() => setShowModal(false)}
          report={selectedReport}
        />

      </div>

    </AdminLayout>

  );

};

export default Reports;