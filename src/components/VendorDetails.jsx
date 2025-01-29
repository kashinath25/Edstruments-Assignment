import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../utils/formValidationSchema";

const VendorDetails = () => {
    const formik = useFormik({
        initialValues: { vendorName: "", address: "" },
        validationSchema,
        onSubmit: (values) => {
            console.log("Vendor Details:", values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>Vendor Details</h3>
            <input
                type="text"
                name="vendorName"
                placeholder="Vendor Name"
                onChange={formik.handleChange}
                value={formik.values.vendorName}
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={formik.handleChange}
                value={formik.values.address}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default VendorDetails;
