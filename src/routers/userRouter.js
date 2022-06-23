import express from "express";
import { edit, remove, see, logout } from "../controllers/userController";
//js파일들은 각각 독립적으므로 import를 매번 해주어야 한다.

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/logout", logout);
userRouter.get("/:id", see);

export default userRouter;
