import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:true
  }
});

const User = mongoose.model("User", userSchema)

export default User
