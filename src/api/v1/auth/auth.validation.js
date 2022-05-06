import Joi from "joi";
import { celebrate } from "celebrate";

class AuthValidation {
 signUpValidation () {
  return celebrate({
   body: Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().required(),
    mobile_number: Joi.number().required(),
    password: Joi.string().min(6).required()
   })
  })
 }

 loginValidation () {
  return celebrate({
   body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
   })
  })
 }
}

export const authValidation = new AuthValidation()