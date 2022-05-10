import { userService } from "../users/users.service.js"
import {
  comparePassword,
  createJwt,
  hashPassword,
  responseHandler,
} from "../../../utils/helpers.js"

class AuthService {
  async signUp(data) {
    let { name, email, password, mobile_number } = data

    email = email.toLowerCase()

    //check if user has been registered before
    const user_exists = await userService.findUserByEmail(email)

    if (user_exists) {
      return responseHandler(false, "User with the same email exists", 409)
    }

    //hash password
    password = await hashPassword(password)

    const _data = {
      name,
      email,
      password,
      mobile_number,
    }

    //save the user to db
    const new_user = await userService.createNewUser(_data)

    if (!new_user) {
      return responseHandler(
        false,
        "User can not registered due to an error. Try again later",
        400
      )
    }

    return responseHandler(true, "User registered successfully", 201, {
      name,
      email,
      createdAt: new_user.createdAt,
      updatedAt: new_user.updatedAt,
    })
  }

  async login(data) {
    let { email, password } = data

    email = email.toLowerCase()

    //user exists
    const user_exists = await userService.findUserByEmail(email)

    if (!user_exists) {
      return responseHandler(false, "Invalid email", 400)
    }

    //compare password
    const password_verified = await comparePassword(
      password,
      user_exists.password
    )

    if (!password_verified) {
      return responseHandler(false, "Incorrect email or password", 400)
    }

    const newObject = JSON.parse(JSON.stringify(user_exists))

    const { __v, password: passwordres, ...rest } = newObject

    //create access token
    const token = createJwt({id: rest._id, name: rest.name}, "7d")

    return responseHandler(true, "User login successfully", 200, {...rest, token})
  }
}

export const authService = new AuthService()
