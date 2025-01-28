import React from "react";
import { FormikProps } from "formik";

interface InvoiceDetailsProps {
  formik: FormikProps<any>;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ formik }) => {
  return (
    <div className="section">
      <h2>Invoice Details</h2>
      <label>
        Purchase Order Number:
        <input
          type="text"
          className="form-input"
          {...formik.getFieldProps("purchaseOrderNumber")}
        />
        {formik.touched.purchaseOrderNumber && formik.errors.purchaseOrderNumber && (
          <p className="error">{formik.errors.purchaseOrderNumber}</p>
        )}
      </label>
      <label>
        Total Amount:
        <input
          type="number"
          className="form-input"
          {...formik.getFieldProps("totalAmount")}
        />
        {formik.touched.totalAmount && formik.errors.totalAmount && (
          <p className="error">{formik.errors.totalAmount}</p>
        )}
      </label>
      <label>
        Invoice Due Date:
        <input
          type="date"
          className="form-input"
          {...formik.getFieldProps("invoiceDueDate")}
        />
        {formik.touched.invoiceDueDate && formik.errors.invoiceDueDate && (
          <p className="error">{formik.errors.invoiceDueDate}</p>
        )}
      </label>
    </div>
  );
};

export default InvoiceDetails;
