// KONEKSI MONGOOSE DB admin-dashboard

// import mongoose from "mongoose";

// export const connectToDB = async () => {
//     const connection = {};

//     try {
//         if(connection.isConnected) return;
//         const db = await mongoose.connect(process.env.MONGO);
//         connection.isConnected = db.connections[0].readystate;
//       } catch (error) {
//         console.log(error);
//         throw new Error(error);
//       }
// };


import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log('Already connected to MongoDB');
      return;
    }

    const mongoUri = process.env.MONGO;
    if (!mongoUri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    const db = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB:', connection.isConnected);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};
