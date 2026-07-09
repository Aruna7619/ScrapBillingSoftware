import React from "react";
import "../styles/quickActions.css";

const QuickActions = () => {

    return (

        <div className="quick-actions">

            <h3>Quick Actions</h3>

            <div className="action-buttons">

                <button>Add Scrap Item</button>

                <button>Purchase Bill</button>

                <button>Sales Bill</button>

                <button>Add Customer</button>

                <button>Add Supplier</button>

            </div>

        </div>

    );
};

export default QuickActions;