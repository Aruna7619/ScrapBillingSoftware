import React from "react";

const ReportSummary = ({ reports }) => {

  const totalBills = reports.length;

  const totalPurchase = reports.reduce(
    (sum, report) => sum + report.amount,
    0
  );

  const averageBill =
    totalBills > 0
      ? (totalPurchase / totalBills).toFixed(2)
      : 0;

  const todayPurchase = reports
    .filter((report) => report.date === "11-07-2026")
    .reduce((sum, report) => sum + report.amount, 0);

  return (

    <div className="report-summary">

      <div className="summary-card">

        <h4>Total Bills</h4>

        <h2>{totalBills}</h2>

      </div>

      <div className="summary-card">

        <h4>Total Purchase</h4>

        <h2>₹ {totalPurchase.toLocaleString()}</h2>

      </div>

      <div className="summary-card">

        <h4>Average Bill</h4>

        <h2>₹ {Number(averageBill).toLocaleString()}</h2>

      </div>

      <div className="summary-card">

        <h4>Today's Purchase</h4>

        <h2>₹ {todayPurchase.toLocaleString()}</h2>

      </div>

    </div>

  );

};

export default ReportSummary;