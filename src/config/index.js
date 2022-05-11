import dotenv from "dotenv"
dotenv.config()
export const NODE_ENV = process.env.NODE_ENV || "developemnt"
export const MONGODB_URI = process.env.MONGODB_URI
export const PORT = process.env.PORT || 4000
export const SECRET_KEY = process.env.SECRET_KEY || "youcannotfindthesecretkey"
export const CLOUD_API_KEY = process.env.CLOUD_API_KEY
export const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET
export const CLOUD_NAME = process.env.CLOUD_NAME
 