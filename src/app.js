import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { isCelebrateError } from "celebrate"
import apiRoutes from "./routes.js"
import { NODE_ENV } from "./config/index.js"
import path from "path"
import url from 'url';

const app = express()
const { fileURLToPath } = url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//api routes
apiRoutes(app)


//production || route not found
if(NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
} else {
  app.get("*", (req, res) => {
    return res.status(404).json({
     status: false,
     message: "Route not found"
    })
   })
}



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