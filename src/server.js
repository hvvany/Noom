import express from "express";
import http from "http";
import SocketIO from "socket.io";
const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
// server를 만들어서 wsserver에 넣는 이유는 http와 ws방식 모두 같은 서버, 같은 포트 사용하기 위해서이다.
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);
