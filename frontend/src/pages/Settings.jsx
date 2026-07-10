import React from "react";
import AdminLayout from "../components/AdminLayout";
import CompanySettings from "../components/CompanySettings";
import ProfileSettings from "../components/ProfileSettings";
import ChangePassword from "../components/ChangePassword";
import SystemSettings from "../components/SystemSettings";
import "../styles/settings.css";

const Settings = () => {

    return (

        <AdminLayout>

            <div className="settings-container">

                <div className="page-header">

                    <h2>Settings</h2>

                </div>

                <CompanySettings />
                <ProfileSettings />
                <ChangePassword />
                <SystemSettings />

            </div>

        </AdminLayout>

    );
};

export default Settings;