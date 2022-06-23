import express from "express";
//js파일들은 각각 독립적으므로 import를 매번 해주어야 한다.
import { trending, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";
// export default와는 다르게 각각 export로 선언된 것들은 정의된 이름 그대로 사용해야 한다.
// {} 안에 써주어야 이름 그대로 사용한다는 의미, {}없이 이름만 같게 써주면 에러 발생

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
//각각의 파일은 기본적으로 private하게 되어있어서 다른 곳에서 이곳의 변수를 사용하기 위해 export해준다.
//파일이 전부 필요한것이 아니라 globalRouter만 필요하므로 이것만 export한다.
