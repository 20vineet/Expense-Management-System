/*import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}

import mongoose from "mongoose";

// Establishes a connection to the MongoDB database
export const connectDB = async () => {
    try {
        const db = process.env.MONGO_URL;
        const { connection } = await mongoose.connect(db, { useNewUrlParser: true });

        console.log(`MongoDB connected to ${connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        // Handle the error appropriately, e.g., throw error or exit the application
        process.exit(1); // Exit with error status code
    }
};*/

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running On ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`${error}`);
  }
};



