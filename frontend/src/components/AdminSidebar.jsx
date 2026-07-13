import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    FiMenu,
    FiGrid,
    FiPackage,
    FiTrendingUp,
    FiTruck,
    FiCreditCard,
    FiBarChart2,
    FiUsers,
    FiSettings,
    FiLogOut
} from "react-icons/fi";



import "../styles/adminSidebar.css";

const AdminSidebar = ({
    collapsed,
    setCollapsed,
    mobileOpen,
    setMobileOpen
}) => {



   const menuItems = [
    {
        name: "Dashboard",
        icon: <FiGrid />,
        path: "/",
    },
    {
        name: "Scrap Items",
        icon: <FiPackage />,
        path: "/scrap-items",
    },
    {
        name: "Daily Rates",
        icon: <FiTrendingUp />,
        path: "/daily-rates",
    },
    {
        name: "Vendors",
        icon: <FiTruck />,
        path: "/vendors",
    },
    {
        name: "Billing",
        icon: <FiCreditCard />,
        path: "/billing",
    },
    {
        name: "Reports",
        icon: <FiBarChart2 />,
        path: "/reports",
    },
    {
        name: "User Management",
        icon: <FiUsers />,
        path: "/user-management",
    },
    {
        name: "Settings",
        icon: <FiSettings />,
        path: "/settings",
    },
];

    return (<aside
        className={`admin-sidebar 
  ${collapsed ? "collapsed" : ""} 
  ${mobileOpen ? "open" : ""}`}
    >
        <div className="sidebar-top">
            {!collapsed && <h2>Scrap Billing</h2>}

            <button
                className="toggle-btn"
                onClick={() => {
                    if (window.innerWidth <= 768) {
                        setMobileOpen(!mobileOpen); // mobile open/close
                    } else {
                        setCollapsed(!collapsed); // desktop collapse
                    }
                }}
            >
                <FiMenu />
            </button>
        </div>



        <ul className="sidebar-menu-admin">
            {menuItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    end={item.path === "/CRMAdminDashboard"}
                    className={({ isActive }) =>
                        `menu-item-admin ${isActive ? "active" : ""}`
                    }
                    onClick={() => {
                        if (window.innerWidth <= 768) {
                            setMobileOpen(false);
                        }
                    }}
                >
                    <span className="menu-icon">{item.icon}</span>

                    {!collapsed && (
                        <span className="menu-text">{item.name}</span>
                    )}
                </NavLink>
            ))}
        </ul>

        <div className="sidebar-footer">
            <button className="logout-btn">
  <FiLogOut />
  {!collapsed && <span>Logout</span>}
</button>
        </div>

    </aside>

    );
};

export default AdminSidebar;