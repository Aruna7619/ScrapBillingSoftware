import React from "react";
import "../styles/lowStockTable.css";

const LowStockTable = () => {

    const lowStock = [

        {
            item: "Iron Scrap",
            quantity: "8 Kg",
        },

        {
            item: "Copper Scrap",
            quantity: "5 Kg",
        },

        {
            item: "Plastic Scrap",
            quantity: "2 Kg",
        },

        {
            item: "Steel Scrap",
            quantity: "6 Kg",
        },

    ];

    return (

        <div className="low-stock">

            <h3>⚠️ Low Stock Items</h3>

            <table>

                <thead>

                    <tr>

                        <th>Item</th>

                        <th>Available Quantity</th>

                    </tr>

                </thead>

                <tbody>

                    {lowStock.map((item,index)=>(

                        <tr key={index}>

                            <td>{item.item}</td>

                            <td>{item.quantity}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
};

export default LowStockTable;