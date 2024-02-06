import  express  from "express";
import ApartmentController from "../controllers/apartmentController";
const apartmentRoutes = express.Router()
apartmentRoutes.get('/apartments/:page',ApartmentController.getAllApartmentsController)
apartmentRoutes.get('/apartment/:refNo',ApartmentController.getApartmentController)
apartmentRoutes.post('/addapartment',ApartmentController.addApartment)

export default apartmentRoutes

