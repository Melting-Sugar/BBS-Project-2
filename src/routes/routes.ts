import { Router } from "express";

import { UserController } from "../controllers/UserController";
import { BoardController } from "../controllers/BoardController";
import { MessageController } from "../controllers/MessageController";

const router = Router();

router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/boards", BoardController.fetchBoards);
router.get("/boards/:boardId/messages", MessageController.fetchMessages);
router.post("/boards/:boardId/messages", MessageController.createMessage);
router.delete("/boards/:boardId/messages/:messageId", MessageController.removeMessage);

export default router;