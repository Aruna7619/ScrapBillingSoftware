import React from "react";
import "../styles/recentPurchaseTable.css";

const RecentPurchaseTable = () => {

    const purchases = [

        {
            billNo: "P001",
            supplier: "ABC Traders",
            date: "09-07-2026",
            amount: "₹18,500",
        },

        {
            billNo: "P002",
            supplier: "Ravi Metals",
            date: "09-07-2026",
            amount: "₹9,800",
        },

        {
            billNo: "P003",
            supplier: "Kumar Scrap",
            date: "08-07-2026",
            amount: "₹15,000",
        },

        {
            billNo: "P004",
            supplier: "Metro Metals",
            date: "08-07-2026",
            amount: "₹12,600",
        },

        {
            billNo: "P005",
            supplier: "SK Traders",
            date: "07-07-2026",
            amount: "₹8,500",
        },

    ];

    return (

        <div className="recent-purchase">

            <h3>Recent Purchase Bills</h3>

            <table>

                <thead>

                    <tr>

                        <th>Bill No</th>

                        <th>Supplier</th>

                        <th>Date</th>

                        <th>Amount</th>

                    </tr>

                </thead>

                <tbody>

                    {purchases.map((purchase, index) => (

                        <tr key={index}>

                            <td>{purchase.billNo}</td>

                            <td>{purchase.supplier}</td>

                            <td>{purchase.date}</td>

                            <td>{purchase.amount}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
};

export default RecentPurchaseTable;