import authRouter from "./api/v1/auth/auth.controller.js"
import postRouter from "./api/v1/posts/posts.controller.js";

const globalPrefix = "/api/v1"

const routes = [
 {
  prefix: "auth",
  name: authRouter
 },
 {
   prefix: "posts",
   name: postRouter
 }
]

export default (app) => {
 routes.forEach((element) => {
   app.use(`${globalPrefix}/${element.prefix}`, element.name)
 });
 return app
}