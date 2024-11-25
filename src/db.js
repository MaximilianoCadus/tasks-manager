import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://maxicadus:Itachi91218@cluster0.j9bg2.mongodb.net/tasks-manager"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
