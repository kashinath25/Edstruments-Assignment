import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import VendorDetails from "./components/VendorDetails";
import InvoiceDetails from "./components/InvoiceDetails";
import ExpenseDetails from "./components/ExpenseDetails";

const App = () => {
  const formik = useFormik({
    initialValues: {
      purchaseOrderNumber: "",
      totalAmount: "",
      invoiceDueDate: "",
      lineAmount: "",
    },
    validationSchema: Yup.object({
      purchaseOrderNumber: Yup.string().required("Purchase Order Number is required"),
      totalAmount: Yup.number().required("Total Amount is required"),
      invoiceDueDate: Yup.string().required("Invoice Due Date is required"),
      lineAmount: Yup.number().required("Line Amount is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("invoiceData", JSON.stringify(values));
      alert("Form submitted successfully!");
    },
  });

  React.useEffect(() => {
    const savedData = localStorage.getItem("invoiceData");
    if (savedData) {
      formik.setValues(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="container">
      <h1>Create New Invoice</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-sections">
          <div className="left-section">
            <div className="upload-box">
              <h3>Upload Your Invoice</h3>
              <p>To auto-populate fields and save time</p>
              <button type="button" className="upload-btn">
                Upload File
              </button>
              <p className="upload-instructions">Click to upload or drag and drop</p>
            </div>
          </div>
          <div className="right-section">
            <VendorDetails />
            <InvoiceDetails formik={formik} />
            <ExpenseDetails formik={formik} />
          </div>
        </div>
        <div className="actions">
          <button type="submit" className="submit-btn">
            Submit & Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
