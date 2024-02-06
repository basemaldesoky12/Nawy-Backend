import { Request, Response } from 'express';
import ApartmentModel from '../models/ApartmentModel';
import { ApartmentType } from '../types/ApartmentType';

export const getAllApartmentsController = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.params.page) || 1; 
        const limit = 6; 
        const {apartments, totalItems} = await ApartmentModel.getAllApartmentsPaginated(page , limit);
        const totalPages = Math.ceil(totalItems / limit);

        res.json({
            status: 200,
            data: apartments,totalPages
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Error: ${error}`,
        });
    }

}
export const getApartmentController = async (req: Request, res: Response) => {
    try {
        const { refNo } = req.params; 
        const apartment = await ApartmentModel.getApartmentByRefNo(refNo);

        if (apartment) {
            res.json({
                status: 200,
                data: apartment,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Apartment not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Error: ${error}`,
        });
    }

}
export const addApartment = async (req: Request, res: Response) => {
    try {
        const newApartmentData: ApartmentType = req.body
        const newApartment = await ApartmentModel.addApartment(newApartmentData);
        res.json({
            status: 201, 
            data: newApartment,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Error: ${error}`,
        });
    }
}
const ApartmentController = {
    getAllApartmentsController,
    getApartmentController,
    addApartment
}
export default ApartmentController