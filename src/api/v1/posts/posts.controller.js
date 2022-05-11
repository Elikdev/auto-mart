import { Router } from "express";
import { postService } from "./posts.service.js";
import { checkToken } from "../../../middleware/checkLogin.js";
import upload from "../../../utils/multer.js"
import cloudinary from "../../../utils/cloudinary.js";
import { postValidation } from "./posts.validation.js";
import paginator from "../../../middleware/Paginator.js";
import Post from "./posts.model.js";

const postRouter = Router()

const imageUpload = upload.single("image")

postRouter.get("/",  paginator(Post, "posts"), async (req, res) => {
 try {
   const paginate = res.payload
  const response = await postService.findAllPosts(paginate)

  return res.status(response.statusCode).json({
   status: response.status,
   message: response.message,
   data: response.data
  })

 } catch (err) {
  console.log(err)
  return res.status(500).json({
    status: false,
    message:
      "An error occurred while processing your request. Try again later",
  })
 }
})

postRouter.get("/:id", postValidation.getOnePost(), async (req, res) => {
 try {
  const { id } = req.params

  const response = await postService.findPostById(id)

  return res.status(response.statusCode).json({
   status: response.status,
   message: response.message,
   data: response.data
  })
  
 } catch (err) {
  console.log(err)
  return res.status(500).json({
    status: false,
    message:
      "An error occurred while processing your request. Try again later",
  })
 }
})

postRouter.get("/user/all-posts", checkToken,  paginator(Post, "posts", "user:userId"), async (req, res) => {
  try {
    const paginate = res.payload
   const response = await postService.findPostByUser(paginate)
 
   return res.status(response.statusCode).json({
    status: response.status,
    message: response.message,
    data: response.data
   })
 
  } catch (err) {
   console.log(err)
   return res.status(500).json({
     status: false,
     message:
       "An error occurred while processing your request. Try again later",
   })
  }
 })

postRouter.post("/", checkToken, postValidation.createPostValidation(),  imageUpload,  async (req, res) => {
 try {
  const { name, price, location, description } = req.body
  const image = req.file
  const {_id, name:user_name, mobile_number } = req.user

  let result_image_url

  if(image) {
   //upload to cloudinary
   result_image_url = await cloudinary.uploader.upload(image.path);
  }

  const user = {
    _id,
    name: user_name,
    mobile_number
  }

  const _data =  {
   name,
   price,
   location,
   image_url:  image ? result_image_url.secure_url : null,
   description,
   user
  }

  const response = await postService.createNewPost(_data)

  return res.status(response.statusCode).json({
   status: response.status,
   message: response.message,
   data: response.data
  })
  
 } catch (err) {
  console.log(err)
  return res.status(500).json({
    status: false,
    message:
      "An error occurred while processing your request. Try again later",
  })
 }
})

postRouter.delete("/:id", postValidation.getOnePost(), checkToken,  async (req, res) => {
 try {
  const { _id } = req.user
  const { id } = req.params


  const response = await postService.deletePost(id, _id)

  return res.status(response.statusCode).json({
   status: response.status,
   message: response.message,
   data: response.data
  })
  
 } catch (err) {
  console.log(err)
  return res.status(500).json({
    status: false,
    message:
      "An error occurred while processing your request. Try again later",
  })
 }
})



export default postRouter