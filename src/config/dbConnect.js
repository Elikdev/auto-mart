import { connect } from "mongoose"
import { MONGODB_URI } from "./"

const connectWithRetry = () => {
  console.log("MongoDB connection with retry")
  return connect(MONGODB_URI, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

const dbConnect = async () => {
  try {
    await connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Database connected successfully.")
  } catch (err) {
    console.log(`Mongoose connection was not successful due to: ${err}`)
    setTimeout(connectWithRetry, 5000)
  }
}

export default dbConnect
