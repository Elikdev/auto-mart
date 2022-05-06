import { model, Schema } from "mongoose"

const PostSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
  },
  image_url: {
    type: String
  },
  location: {
   type: String,
   required: true
  },
  description: {
    type: String
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: "User",
  },
},  {
  timestamps: true
})

export default model("Post", PostSchema)
