import User from "./users.model.js"
class UserService {
  async createNewUser(data) {
    const { name, email, mobile_number, password } = data
    const instance = new User({
      name,
      email,
      mobile_number,
      password,
    })

    return await instance.save()
  }

  async findUserByEmail(email, selectFields = []) {
    const select = selectFields.join(" ")
    return await User.findOne({ email }).select(select)//.populate("posts")
  }

  async findUserById(id) {
    return await User.findById(id).select("-password -__v")//.populate("posts")
  }
}

export const userService = new UserService()
