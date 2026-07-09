import React from "react";
import "../styles/recentSalesTable.css";

const RecentSalesTable = () => {

    const sales = [

        {
            billNo: "S001",
            customer: "Ramesh",
            date: "09-07-2026",
            amount: "₹24,000",
        },

        {
            billNo: "S002",
            customer: "Suresh",
            date: "09-07-2026",
            amount: "₹16,500",
        },

        {
            billNo: "S003",
            customer: "Mahesh",
            date: "08-07-2026",
            amount: "₹12,800",
        },

        {
            billNo: "S004",
            customer: "Kumar",
            date: "08-07-2026",
            amount: "₹21,300",
        },

        {
            billNo: "S005",
            customer: "Vinay",
            date: "07-07-2026",
            amount: "₹8,900",
        },

    ];

    return (

        <div className="recent-sales">

            <h3>Recent Sales Bills</h3>

            <table>

                <thead>

                    <tr>

                        <th>Bill No</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>

                    </tr>

                </thead>

                <tbody>

                    {sales.map((sale, index) => (

                        <tr key={index}>

                            <td>{sale.billNo}</td>
                            <td>{sale.customer}</td>
                            <td>{sale.date}</td>
                            <td>{sale.amount}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default RecentSalesTable;