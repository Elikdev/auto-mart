import Joi from "joi";
import { celebrate } from "celebrate";

class PostValidation {
 createPostValidation () {
  return celebrate({
   body:{
    name: Joi.string().trim().optional(),
    description: Joi.string().optional(),
    location: Joi.string().optional(),
    price: Joi.number().optional()
   }
  })
 }

 getOnePost() {
  return celebrate({
   params: Joi.object({
    id: Joi.string().required()
   })
  })
 }
}

export const postValidation = new PostValidation()