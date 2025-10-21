import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
  });

export default Todo;
