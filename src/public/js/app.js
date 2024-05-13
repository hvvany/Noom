const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function backendDone(msg) {
  console.log(`The backend says: `, msg);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, backendDone); // emit의 가장 마지막 argument는 마지막에 실행 될 함수
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
