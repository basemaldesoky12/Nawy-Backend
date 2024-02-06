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
exports.addApartment = exports.getApartmentController = exports.getAllApartmentsController = void 0;
const ApartmentModel_1 = __importDefault(require("../models/ApartmentModel"));
const getAllApartmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.params.page) || 1;
        const limit = 6;
        const { apartments, totalItems } = yield ApartmentModel_1.default.getAllApartmentsPaginated(page, limit);
        const totalPages = Math.ceil(totalItems / limit);
        res.json({
            status: 200,
            data: apartments, totalPages
        });
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            message: `Error: ${error}`,
        });
    }
});
exports.getAllApartmentsController = getAllApartmentsController;
const getApartmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refNo } = req.params;
        const apartment = yield ApartmentModel_1.default.getApartmentByRefNo(refNo);
        if (apartment) {
            res.json({
                status: 200,
                data: apartment,
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: 'Apartment not found',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            message: `Error: ${error}`,
        });
    }
});
exports.getApartmentController = getApartmentController;
const addApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newApartmentData = req.body;
        const newApartment = yield ApartmentModel_1.default.addApartment(newApartmentData);
        res.json({
            status: 201,
            data: newApartment,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            message: `Error: ${error}`,
        });
    }
});
exports.addApartment = addApartment;
const ApartmentController = {
    getAllApartmentsController: exports.getAllApartmentsController,
    getApartmentController: exports.getApartmentController,
    addApartment: exports.addApartment
};
exports.default = ApartmentController;
