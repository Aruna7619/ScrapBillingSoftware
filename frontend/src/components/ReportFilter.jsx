import React, { useState } from "react";

const ReportFilter = ({ onSearch }) => {

  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    vendor: "All Vendors",
    billNo: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleReset = () => {

    const resetFilters = {
      fromDate: "",
      toDate: "",
      vendor: "All Vendors",
      billNo: "",
    };

    setFilters(resetFilters);
    onSearch(resetFilters);
  };

  return (

    <div className="report-filter">

      <div className="filter-grid">

        <div className="form-group">

          <label>From Date</label>

          <input
            type="date"
            name="fromDate"
            value={filters.fromDate}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>To Date</label>

          <input
            type="date"
            name="toDate"
            value={filters.toDate}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Vendor</label>

          <select
            name="vendor"
            value={filters.vendor}
            onChange={handleChange}
          >

            <option>All Vendors</option>
            <option>Ravi Kumar</option>
            <option>Manjunath</option>
            <option>Suresh</option>
            <option>Ramesh</option>

          </select>

        </div>

        <div className="form-group">

          <label>Bill No</label>

          <input
            type="text"
            name="billNo"
            placeholder="Search Bill No"
            value={filters.billNo}
            onChange={handleChange}
          />

        </div>

      </div>

      <div className="filter-buttons">

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </button>

        <button
          className="reset-btn"
          onClick={handleReset}
        >
          Reset
        </button>

      </div>

    </div>

  );

};

export default ReportFilter;