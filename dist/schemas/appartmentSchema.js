"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const shortid_1 = __importDefault(require("shortid"));
const apartmentSchema = new mongoose_1.default.Schema({
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
        default: shortid_1.default.generate
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
exports.default = apartmentSchema;
