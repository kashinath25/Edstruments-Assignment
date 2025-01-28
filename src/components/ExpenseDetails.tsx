import React from "react";
import { FormikProps } from "formik";

interface ExpenseDetailsProps {
  formik: FormikProps<any>;
}

const ExpenseDetails: React.FC<ExpenseDetailsProps> = ({ formik }) => {
  return (
    <div className="section">
      <h2>Expense Details</h2>
      <label>
        Line Amount:
        <input
          type="number"
          className="form-input"
          {...formik.getFieldProps("lineAmount")}
        />
        {formik.touched.lineAmount && formik.errors.lineAmount && (
          <p className="error">{formik.errors.lineAmount}</p>
        )}
      </label>
      <label>
        Account:
        <select className="form-input">
          <option value="101">Select Account</option>
          <option value="102">General Expense</option>
        </select>
      </label>
      <label>
        Description:
        <textarea className="form-input"></textarea>
      </label>
    </div>
  );
};

export default ExpenseDetails;
