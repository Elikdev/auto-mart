import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config/index.js"

const { hashSync, compareSync } = bcrypt

export const responseHandler = (status, message, statusCode, data = {}) => {
  return {
    status,
    message,
    statusCode,
    data,
  }
}

export const hashPassword = async (password) => {
  return hashSync(password, 10)
}

export const comparePassword = async (password, hashedPassword) => {
  return compareSync(password, hashedPassword)
}

export const createJwt = (payload, expIn) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: expIn })
}

export const verifyJwt = (token) => {
  return jwt.verify(token, SECRET_KEY)
};
