import mongoose from "mongoose";
import apartmentSchema from "../schemas/appartmentSchema";
import { ApartmentType } from "../types/ApartmentType";

const apartmentModel = mongoose.model('Apartments', apartmentSchema)

export const getAllApartmentsPaginated = async (page : number, limit : number) => {
    try{
        const skip = (page - 1) * limit;
        const apartments = await apartmentModel.find()
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await apartmentModel.countDocuments();

        return {apartments, totalItems};    

    }catch(error){
        throw new Error(`Database error: ${error}`);
    }
}

export const getApartmentByRefNo = async (refNo: string) => {
    try{
        const apartment = await apartmentModel.findOne({ refNo });
        return apartment;
    }catch(error){
        throw new Error(`Database error: ${error}`);
    }
}
export const addApartment = async (apartmentData: ApartmentType) => {
    try {
      const newApartment = await apartmentModel.create(apartmentData);
      return newApartment;
    } catch (error) {
      throw new Error(`Database error: ${error}`);
    }
  };
  
const ApartmentModel = {
    getAllApartmentsPaginated,
    getApartmentByRefNo,
    addApartment
  };
  export default ApartmentModel
  