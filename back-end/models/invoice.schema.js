import { Schema, model } from "mongoose";

const invoiceSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    currentAmount: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: ["unpaid", "partially_paid", "paid"],
        default: "unpaid",
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    supplierId: {
        type: String,
        ref: "Supplier",
        required: false,
    },
        note: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});

export default model("Invoice", invoiceSchema);
