import React from "react";

const VendorDetails: React.FC = () => {
  return (
    <div className="section">
      <h2>Vendor Details</h2>
      <label>
        Vendor:
        <select className="form-input">
          <option value="A1">A1 Exterminators</option>
          <option value="B2">B2 Solutions</option>
        </select>
      </label>
      <p>500 Main St, Lynn</p>
      <button className="link-btn">View Vendor Details</button>
    </div>
  );
};

export default VendorDetails;
