import React, { useState } from "react";
import "../styles/systemSettings.css";

const SystemSettings = () => {

    const [settings, setSettings] = useState({
        currency: "INR (₹)",
        weightUnit: "Kg",
        dateFormat: "DD/MM/YYYY",
    });

    const handleChange = (e) => {
        setSettings({
            ...settings,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("System Settings Saved Successfully!");
    };

    return (

        <div className="system-settings">

            <h3>System Preferences</h3>

            <form
                className="system-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group">

                    <label>Currency</label>

                    <select
                        name="currency"
                        value={settings.currency}
                        onChange={handleChange}
                    >
                        <option>INR (₹)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                    </select>

                </div>

                <div className="form-group">

                    <label>Weight Unit</label>

                    <select
                        name="weightUnit"
                        value={settings.weightUnit}
                        onChange={handleChange}
                    >
                        <option>Kg</option>
                        <option>Gram</option>
                        <option>Ton</option>
                    </select>

                </div>

                <div className="form-group">

                    <label>Date Format</label>

                    <select
                        name="dateFormat"
                        value={settings.dateFormat}
                        onChange={handleChange}
                    >
                        <option>DD/MM/YYYY</option>
                        <option>MM/DD/YYYY</option>
                        <option>YYYY-MM-DD</option>
                    </select>

                </div>

                <div className="form-buttons">

                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Save Preferences
                    </button>

                </div>

            </form>

        </div>

    );
};

export default SystemSettings;