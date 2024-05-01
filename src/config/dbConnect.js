import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
      console.log("MongoDB connected");
    });
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
