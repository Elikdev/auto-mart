import { responseHandler } from "../../../utils/helpers.js";
import Post from "./posts.model.js";

class PostService {
 async findAllPosts(payload) {

  const {data} = payload

  if(data?.length <= 0) {
   return responseHandler(false, "No cars for sale at the moment", 404)
  }

  return responseHandler(true, "Posts retrieved", 200, payload)
 }

 async findPostById(id) {
  const post = await Post.findById(id).populate("user", "name mobile_number")

  if(!post) {
   return responseHandler(false, "Post was not found", 404)
  }

  return responseHandler(true, "Post retrieved successfully", 200, post)
 }

 async findPostByUser(payload) {
  const {data} = payload

  if(data?.length <= 0) {
   return responseHandler(false, "You have not posted any cars", 404)
  }

  return responseHandler(true, "Post retrieved successfully", 200, payload)
 }

 async createNewPost(data) {
  const {name, price, location, image_url, description, user} = data

  const instance = new Post({
   name,
   price,
   location, 
   image_url,
   description,
   user: user._id
  })

  const new_post = await instance.save()

  if(!new_post) {
   return responseHandler(false, "Post could not be saved due to an error", 400)
  }

  const newObject = JSON.parse(JSON.stringify(new_post))

  const {user: res_user, ...rest} = newObject

  return responseHandler(true, "New post created successfully", 201, {...rest, user: user})
 }

 async deletePost(id, userId) {
  const deleted_post = await Post.findOneAndDelete({_id: id, user: userId})

  if(!deleted_post) {
   return responseHandler(false, "You can not delete a post that you do not own", 400)
  }
  
  //pull posts from user posts
  await Post.findOneAndUpdate({_id: id}, {$pull: {posts: id}})

  return responseHandler(true, "Post deleted successfully", 200)
 }
}

export const postService = new PostService()