import mongoose from "mongoose";
import shortid from 'shortid';

const apartmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    maxPrice: {
        type: Number,
        required: true,
    },
    minPrice: {
        type: Number,
        required: true,
    },
    maxUnitArea: {
        type: Number,
        required: true,
    },
    minUnitArea: {
        type: Number,
        required: true,
    },
    refNo: {
        type: String,
        unique: true,
        default : shortid.generate
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    deliveryIn: {
        type: String,
        required: true,
    },
    compound: {
        type: String,
        required: true,
    },
    saleType: {
        type: String,
        required: true,
    },
    finishing: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
export default apartmentSchema