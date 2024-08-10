import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // for optimising search results
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
    },
    coverImage: {
      type: String, //cloudinary url
    },
    watchHistory: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },

  { timestamps: true }
);
// bcrypt is a password-hashing function
// jwt is a key to digital signature basically used for encryption purposes
// Pre middleware functions are executed one after another, when each middleware calls next.
//next is actually pointer to next middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // if password is not modified, no need to hash it
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
// Checking Password Correctness
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// using jwt : Access Token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      // payload
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
// using jwt : Refresh Token

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      // payload
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
export const User = mongoose.model("User", userSchema);
