"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const apartmentRoute_1 = __importDefault(require("./routes/apartmentRoute"));
const app = (0, express_1.default)();
mongoose_1.default.connect(config_1.default.databaseURL);
const db = mongoose_1.default.connection;
db.on('error', (error) => {
    console.error(`MongoDB connection error: ${error}`);
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', apartmentRoute_1.default);
exports.default = app;
