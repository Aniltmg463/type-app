import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  text: string;
  completed: boolean;
  userId: Schema.Types.ObjectId;
}

const TodoSchema: Schema = new Schema({
  text: {
    type: String,
    required: [true, 'Todo text is required'],
    trim: true,
    maxLength: [200, 'Todo text cannot exceed 200 characters']
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
}, {
  timestamps: true
});

const Todo = mongoose.models.Todo || mongoose.model<ITodo>('Todo', TodoSchema);

export default Todo;
