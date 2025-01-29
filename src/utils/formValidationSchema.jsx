import * as Yup from "yup";

export const validationSchema = Yup.object({
    vendorName: Yup.string().required("Vendor name is required"),
    purchaseOrderNumber: Yup.string().required("PO number is required"),
    totalAmount: Yup.number().required("Total amount is required"),
    invoiceDueDate: Yup.date().required("Invoice due date is required"),
});
