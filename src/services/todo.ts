import Todo, { TodoDocument } from "../models/todo";

export const getAllTodos = async (): Promise<TodoDocument[]> => {
    return Todo.find();
};

export const createTodo = async (text: string): Promise<TodoDocument> => {
    return Todo.create({ text });
};

export const updateTodo = async (
    id: string,
    updates: Partial<TodoDocument>
): Promise<TodoDocument | null> => {
    return Todo.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteTodo = async (id: string): Promise<TodoDocument | null> => {
    return Todo.findByIdAndDelete(id);
};
