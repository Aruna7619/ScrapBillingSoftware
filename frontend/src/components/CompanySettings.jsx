import React, { useState } from "react";
import "../styles/companySettings.css";

const CompanySettings = () => {

    const [company, setCompany] = useState({
        companyName: "",
        ownerName: "",
        gstNumber: "",
        panNumber: "",
        phone: "",
        email: "",
        address: "",
        logo: null,
    });

    const handleChange = (e) => {
        setCompany({
            ...company,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogoChange = (e) => {
        setCompany({
            ...company,
            logo: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Company Settings Saved Successfully!");
    };

    return (

        <div className="company-settings">

            <h3>Company Information</h3>

            <form
                className="company-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group">
                    <label>Company Name</label>

                    <input
                        type="text"
                        name="companyName"
                        value={company.companyName}
                        onChange={handleChange}
                        placeholder="Enter Company Name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Owner Name</label>

                    <input
                        type="text"
                        name="ownerName"
                        value={company.ownerName}
                        onChange={handleChange}
                        placeholder="Enter Owner Name"
                    />
                </div>

                <div className="form-group">
                    <label>GST Number</label>

                    <input
                        type="text"
                        name="gstNumber"
                        value={company.gstNumber}
                        onChange={handleChange}
                        placeholder="Enter GST Number"
                    />
                </div>

                <div className="form-group">
                    <label>PAN Number</label>

                    <input
                        type="text"
                        name="panNumber"
                        value={company.panNumber}
                        onChange={handleChange}
                        placeholder="Enter PAN Number"
                    />
                </div>

                <div className="form-group">
                    <label>Phone</label>

                    <input
                        type="text"
                        name="phone"
                        value={company.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={company.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                    />
                </div>

                <div className="form-group full-width">
                    <label>Address</label>

                    <textarea
                        rows="4"
                        name="address"
                        value={company.address}
                        onChange={handleChange}
                        placeholder="Enter Company Address"
                    />
                </div>

                <div className="form-group full-width">
                    <label>Company Logo</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                    />
                </div>

                <div className="form-buttons">
                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Save Settings
                    </button>
                </div>

            </form>

        </div>
    );
};

export default CompanySettings;