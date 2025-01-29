import React from "react";
import { useFormik } from "formik";

const ExpenseDetails = () => {
    const formik = useFormik({
        initialValues: { lineAmount: "", description: "" },
        onSubmit: (values) => {
            console.log("Expense Details:", values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>Expense Details</h3>
            <input
                type="number"
                name="lineAmount"
                placeholder="Line Amount"
                onChange={formik.handleChange}
                value={formik.values.lineAmount}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={formik.handleChange}
                value={formik.values.description}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default ExpenseDetails;
