"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addApartment = exports.getApartmentByRefNo = exports.getAllApartmentsPaginated = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const appartmentSchema_1 = __importDefault(require("../schemas/appartmentSchema"));
const apartmentModel = mongoose_1.default.model('Apartments', appartmentSchema_1.default);
const getAllApartmentsPaginated = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = (page - 1) * limit;
        const apartments = yield apartmentModel.find()
            .skip(skip)
            .limit(limit)
            .exec();
        const totalItems = yield apartmentModel.countDocuments();
        return { apartments, totalItems };
    }
    catch (error) {
        throw new Error(`Database error: ${error}`);
    }
});
exports.getAllApartmentsPaginated = getAllApartmentsPaginated;
const getApartmentByRefNo = (refNo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartment = yield apartmentModel.findOne({ refNo });
        return apartment;
    }
    catch (error) {
        throw new Error(`Database error: ${error}`);
    }
});
exports.getApartmentByRefNo = getApartmentByRefNo;
const addApartment = (apartmentData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newApartment = yield apartmentModel.create(apartmentData);
        return newApartment;
    }
    catch (error) {
        throw new Error(`Database error: ${error}`);
    }
});
exports.addApartment = addApartment;
const ApartmentModel = {
    getAllApartmentsPaginated: exports.getAllApartmentsPaginated,
    getApartmentByRefNo: exports.getApartmentByRefNo,
    addApartment: exports.addApartment
};
exports.default = ApartmentModel;
