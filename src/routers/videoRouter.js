import express from "express";
import { watch, edit, remove, upload } from "../controllers/videoController";
//js파일들은 각각 독립적으므로 import를 매번 해주어야 한다.

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);
videoRouter.get("/upload", upload);
// :는 url안에 parameter를 넣을 수 있게 해준다. 변수처럼 다양한 값이 들어갈 수 있음.
// 이때 /upload 코드줄이 /:id 아래에 있으면 url로 /upload를 입력해도
// upload 텍스트 자체를 id로 인식해버린다. 
// 이것을 해결하기위해 id자리에 숫자만 받을 수 있도록 정규식을 작성한다.
// 정규식의 형식은 (\\)형태로 \\뒤에 정규식 문법에 맞게 적어준다. +는 개수제한이 없다는 뜻

export default videoRouter;
