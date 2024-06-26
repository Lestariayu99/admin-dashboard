// // MEMBUAT MODEL PADA DB

import mongoose from 'mongoose';

// SCHEMA USER START 
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
}, { timestamps: true });
// SCHEMA USER END

// SCHEMA TICKETS START
const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  position: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['High', 'Low', 'Normal'],
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500,
  },
}, { timestamps: true }); // Menambahkan timestamps untuk createdAt dan updatedAt secara otomatis
// SCHEMA TICKETS END



export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);


