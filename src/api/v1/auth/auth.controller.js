import { Router } from "express"
import { authService } from "./auth.service"
import { authValidation } from "./auth.validation"

const authRouter = Router()

authRouter.post("/sign-up", authValidation.signUpValidation(), async (req, res) => {
  try {
    //request body
    const { name, email, password, mobile_number } = req.body

    const data = {
      name,
      email,
      password,
      mobile_number,
    }

    const response = await authService.signUp(data)

    return res.status(response.statusCode).json({
      status: response.status,
      message: response.message,
      data: response.data,
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

authRouter.post("/login", authValidation.loginValidation(), async (req, res) => {
  try {
    //request body
    const { email, password } = req.body

    const data = {
      email,
      password
    }

    const response = await authService.login(data)

    return res.status(response.statusCode).json({
      status: response.status,
      message: response.message,
      data: response.data,
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



export default authRouter
