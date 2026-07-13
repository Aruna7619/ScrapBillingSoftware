import React from "react";

const BillPreview = ({ vendor, items }) => {

  const grandTotal = items.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const today = new Date().toLocaleDateString();

  const invoiceNo = "SB-" + Math.floor(1000 + Math.random() * 9000);

  return (

    <div id="invoice">

      {/* Header */}

      <div className="invoice-header">

        <div>

          <h4 className="invoice-title">
            PURCHASE INVOICE
          </h4>

          <h1>SCRAP BILLING SOFTWARE</h1>

          <p>No.23, Industrial Area</p>

          <p>Mysore, Karnataka - 570001</p>

          <p>Phone : +91 9876543210</p>

          <p>Email : scrapbilling@gmail.com</p>

        </div>

        <div className="invoice-right">

          <h3>ORIGINAL COPY</h3>

          <img
            src="/logo192.png"
            alt="Logo"
            width="80"
          />

        </div>

      </div>

      {/* Invoice Details */}

      <div className="invoice-info">

        <div>

          <p>

            <strong>Invoice No :</strong>

            {invoiceNo}

          </p>

          <p>

            <strong>Date :</strong>

            {today}

          </p>

        </div>

        <div>

          <p>

            <strong>Vendor :</strong>

            {vendor}

          </p>

        </div>

      </div>

      {/* Items */}

      <table className="invoice-table">

        <thead>

          <tr>

            <th>Sl No</th>

            <th>Scrap Item</th>

            <th>Rate / Kg</th>

            <th>Weight</th>

            <th>Amount</th>

          </tr>

        </thead>

        <tbody>

          {items.map((item, index) => (

            <tr key={index}>

              <td>{index + 1}</td>

              <td>{item.item}</td>

              <td>₹ {item.rate}</td>

              <td>{item.weight} Kg</td>

              <td>₹ {item.amount}</td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* Grand Total */}

      <div className="invoice-total">

        <h2>

          Grand Total :

          <span>

            ₹ {grandTotal.toFixed(2)}

          </span>

        </h2>

      </div>

      {/* Footer */}

      <div className="invoice-footer">

        <div>

          <h4>Bank Details</h4>

          <p>Bank : State Bank of India</p>

          <p>A/C No : 123456789012</p>

          <p>IFSC : SBIN0001234</p>

        </div>

        <div className="signature">

          <br />

          <br />

          <br />

          ___________________________

          <p>Authorized Signature</p>

        </div>

      </div>

      <div className="thanks">

        Thank You! Visit Again.

      </div>

    </div>

  );

};

export default BillPreview;