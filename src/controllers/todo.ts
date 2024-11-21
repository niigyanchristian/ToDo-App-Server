import { Request, Response } from "express";
import * as todoService from "../services/todo";

export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await todoService.getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos", error });
    }
};

export const createTodo = async (req: Request, res: Response) => {
    try {
        const todo = await todoService.createTodo(req.body.text);
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ message: "Error creating todo", error });
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const updates = req.body;
        const updatedTodo = await todoService.updateTodo(id, updates);

        if (!updatedTodo) {
            res.status(404).json({ message: "Todo not found" });
            return;
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: "Error updating todo", error });
    }
};

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedTodo = await todoService.deleteTodo(id);

        if (!deletedTodo) {
            res.status(404).json({ message: "Todo not found" });
            return;
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting todo", error });
    }
};