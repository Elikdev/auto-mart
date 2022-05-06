import { hashSync, compareSync } from "bcryptjs"

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
