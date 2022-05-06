import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { isCelebrateError } from "celebrate"
import apiRoutes from "./routes"

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//api routes
apiRoutes(app)


//production || route not found
app.get("*", (req, res) => {
 return res.status(404).json({
  status: false,
  message: "Route not found"
 })
})

app.use((error, req, res, next) => {
 if (isCelebrateError(error)) {
   const errorMessage =
     error.details.get("body") ||
     error.details.get("query") ||
     error.details.get("params");
   const message = errorMessage?.message.replace(/"/g, "");

   return res.status(422).json({
    status: false,
    message
   })
 }
 next();
});


export default app;