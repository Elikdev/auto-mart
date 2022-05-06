import authRouter from "./api/v1/auth/auth.controller"

const globalPrefix = "/api/v1"

const routes = [
 {
  prefix: "auth",
  name: authRouter
 }
]

export default (app) => {
 routes.forEach((element) => {
   app.use(`${globalPrefix}/${element.prefix}`, element.name)
 });
 return app
}