import express from "express";
import morgan from "morgan";
/* "express"라는 package를 express라는 이름으로 import 한다는 의미, 
npm이 알아서 "express"를 node_modules에서 찾아준다.(경로명을 자세히 적을필요 없음) */
/* const express = require("express"); 와 같은 의미지만 node.js가 이해하지 못하는 코드
babel-node 명령어로 실행했기 때문에 node.js가 이해하는 코드로 변환된다.*/
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
//express를 사용하기 위해 제일 먼저 해야할일은 express()를 통해 express application을 만드는 것
//이렇게 만들어진 app(서버)가 listen할 수 있게 해야한다(맨 아래줄)
const logger = morgan("dev");
app.use(logger);
//morgan은 옵션에 따라 req/res 몇몇 정보들을 console에 나타내준다.
//morgan()은 middleware를 return한다.

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
//set함수로 views폴더를 찾을 위치를 변경한다.
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
//router를 사용하여 url을 크게 3가지로 분류하여 관리를 더욱 용이하게 할 수 있다.
//url을 tree화하는 느낌

//application을 만들고 난 뒤에 아래에 application(서버) 설정을 해준다.

// const handleHome = (req, res) => {
//   return res.send("this is home");
// };
// const handleLogin = (req, res) => {
//   return res.send("this is login");
// };
//마지막 controller에는 next가 필요없음

// app.use(logger);
//use함수를 사용하면 자동으로 모든 주소에서 인자로 넣어준 middleware 함수를 사용하게 된다.
//여러 곳에 middleware를 사용해야 할때 한번에 할 수 있음.
//즉 use()는 global middleware(어떤 url을 들어가도 사용되는 middleware)를 만들수 있게 해주는 함수
//아래 코드와 순서에 주의할 것(위에서 아래로 읽기 때문)

// app.get("/", handleHome);
// app.get("/login", handleLogin);
//get은 request 방식 중 하나. 서버에게 get request가 들어왔을때 무엇을 해야하는지 알려주는 코드
//callback 인자에는 꼭 코드자체가 아닌 함수 형태로 써주어야 한다.
//callback 인자에 middleware를 포함한 여러개의 함수를 쓴다면 순서대로 실행된다.
//단, 중간에 어떤 함수에서 무언가 return된다면 거기서 연결은 끝난다.

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

//application 설정이 다 끝나고 난 다음 application이 listen하도록 한다.

app.listen(PORT, handleListening);
//컴퓨터에 있는 여러가지 port중에 어느 port를 listen할지 정해준다(첫번째 인자)
//callback함수 : 서버가 시작하면서 같이 실행되는 함수(두번쩨 인자)
