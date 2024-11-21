import { Router } from "express";
import * as todoController from "../controllers/todo";

const router = Router();

router.get("/todos", todoController.getTodos);
router.post("/todos", todoController.createTodo);
router.put("/todos/:id", todoController.updateTodo);
router.delete("/todos/:id", todoController.deleteTodo);

export default router;
