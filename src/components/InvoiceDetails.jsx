import React from "react";
import { useFormik } from "formik";

const InvoiceDetails = () => {
    const formik = useFormik({
        initialValues: { purchaseOrderNumber: "", totalAmount: "", invoiceDueDate: "" },
        onSubmit: (values) => {
            console.log("Invoice Details:", values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>Invoice Details</h3>
            <input
                type="text"
                name="purchaseOrderNumber"
                placeholder="Purchase Order Number"
                onChange={formik.handleChange}
                value={formik.values.purchaseOrderNumber}
            />
            <input
                type="number"
                name="totalAmount"
                placeholder="Total Amount"
                onChange={formik.handleChange}
                value={formik.values.totalAmount}
            />
            <input
                type="date"
                name="invoiceDueDate"
                onChange={formik.handleChange}
                value={formik.values.invoiceDueDate}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default InvoiceDetails;
