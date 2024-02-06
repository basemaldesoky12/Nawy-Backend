import dotenv from 'dotenv'
dotenv.config()

export const {
    DB_URL
}=process.env
const config = {
    databaseURL: DB_URL!,
  };
export default config