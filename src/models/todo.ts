import mongoose, { Schema, Document } from "mongoose";

export interface TodoDocument extends Document {
    text: string;
    completed: boolean;
}

const TodoSchema: Schema = new Schema(
    {
        text: { type: String, required: true },
        completed: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Todo = mongoose.model<TodoDocument>("Todo", TodoSchema);
export default Todo;
