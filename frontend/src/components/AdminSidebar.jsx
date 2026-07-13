import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {
  FiGrid,
  FiUsers,
  FiFileText,
  FiCreditCard,
  FiDollarSign,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";

import "../styles/adminSidebar.css";

const AdminSidebar = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) => {

  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FiGrid />,
      path: "/dashboard",
    },
    {
      name: "Scrap Items",
      icon: <FiUsers />,
      path: "/scrap-items",
    },
    {
      name: "Daily Rates",
      icon: <FiFileText />,
      path: "/daily-rates",
    },
    {
      name: "Vendors",
      icon: <BsBank />,
      path: "/vendors",
    },
    {
      name: "Billing",
      icon: <FiCreditCard />,
      path: "/billing",
    },
    {
      name: "Reports",
      icon: <FiDollarSign />,
      path: "/reports",
    },
    {
      name: "User Management",
      icon: <HiOutlineDocumentReport />,
      path: "/user-management",
    },
    {
      name: "Settings",
      icon: <FiUser />,
      path: "/settings",
    },
  ];

  const handleLogout = () => {

    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
    }

  };

  return (
    <aside
      className={`admin-sidebar ${
        collapsed ? "collapsed" : ""
      } ${mobileOpen ? "open" : ""}`}
    >
      <div className="sidebar-top">

        {!collapsed && <h2>Scrap Billing</h2>}

        <button
          className="toggle-btn"
          onClick={() => {
            if (window.innerWidth <= 768) {
              setMobileOpen(!mobileOpen);
            } else {
              setCollapsed(!collapsed);
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
            end={item.path === "/dashboard"}
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
              <span className="menu-text">
                {item.name}
              </span>
            )}

          </NavLink>

        ))}

      </ul>

      <div className="sidebar-footer">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FiLogOut />
          {!collapsed && <span>Logout</span>}
        </button>

      </div>

    </aside>
  );
};

export default AdminSidebar;