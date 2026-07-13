import React from "react";
import AdminLayout from "../components/AdminLayout";
import "../styles/dashboard.css";
import DashboardCard from "../components/DashboardCard";
import SummaryCard from "../components/SummaryCard";
import PurchaseSalesChart from "../components/PurchaseSalesChart";
import RecentPurchaseTable from "../components/RecentPurchaseTable";
import RecentSalesTable from "../components/RecentSalesTable";
import LowStockTable from "../components/LowStockTable";
import QuickActions from "../components/QuickActions";

const Dashboard = () => {

    const today = new Date().toLocaleDateString();

    return (
        <AdminLayout>

            <div className="dashboard-container">

                <div className="dashboard-header">

                    <div>



                        <p>
                            Welcome back, Admin 👋
                        </p>

                    </div>

                    <div className="dashboard-date">

                        {today}

                    </div>

                </div>

                <div className="dashboard-grid">

                    <DashboardCard
                        title="Scrap Items"
                        value="25"
                        icon="📦"
                    />

                    <DashboardCard
                        title="Customers"
                        value="120"
                        icon="👥"
                    />

                    <DashboardCard
                        title="Suppliers"
                        value="40"
                        icon="🚚"
                    />

                    <DashboardCard
                        title="Purchase Bills"
                        value="95"
                        icon="📄"
                    />

                    <DashboardCard
                        title="Sales Bills"
                        value="80"
                        icon="🧾"
                    />

                    <DashboardCard
                        title="Revenue"
                        value="₹2,50,000"
                        icon="💰"
                    />

                </div>
                <div className="summary-section">

                    <h3>Today's Summary</h3>

                    <div className="summary-grid">

                        <SummaryCard
                            title="Today's Purchase"
                            value="₹18,500"
                            icon="🛒"
                        />

                        <SummaryCard
                            title="Today's Sales"
                            value="₹25,300"
                            icon="💵"
                        />

                        <SummaryCard
                            title="Today's Profit"
                            value="₹6,800"
                            icon="📈"
                        />

                    </div>
                    <PurchaseSalesChart />

                    <RecentPurchaseTable />
                    <RecentSalesTable />
                    <LowStockTable />

                    <QuickActions />

                </div>

            </div>

        </AdminLayout>
    );
};

export default Dashboard;