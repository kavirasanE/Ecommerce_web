import  mongoose from "mongoose";

const UserSchema = new  mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    Admin: {
      default: false,
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Usermodel = mongoose.model( "User",UserSchema);

export default Usermodel