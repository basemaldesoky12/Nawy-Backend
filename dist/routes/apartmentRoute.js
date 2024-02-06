"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apartmentController_1 = __importDefault(require("../controllers/apartmentController"));
const apartmentRoutes = express_1.default.Router();
apartmentRoutes.get('/apartments/:page', apartmentController_1.default.getAllApartmentsController);
apartmentRoutes.get('/apartment/:refNo', apartmentController_1.default.getApartmentController);
apartmentRoutes.post('/addapartment', apartmentController_1.default.addApartment);
exports.default = apartmentRoutes;
