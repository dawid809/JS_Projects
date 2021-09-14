let socket = new WebSocket("ws://localhost:8080");
import "../styles/style.scss";

socket.onopen = function (e) {
  socket.send("Hello new one! Set your name and have fun!");
};
socket.onmessage = function (event) {
  const msg = document.getElementById("messages");
  const item = document.createElement("li");
  item.textContent = event.data;
  msg?.appendChild(item);
};

let name = <HTMLInputElement>document.getElementById("name");
let nameValue: string;

name.addEventListener("change", () => {
  nameValue = name.value;
});

document.getElementById("send").addEventListener("click", () => {
  let message = (<HTMLInputElement>document.getElementById("msg")).value;
  console.log(message);
  console.log(nameValue);
  if (
    message == "" ||
    nameValue == "" ||
    nameValue == undefined ||
    (nameValue == "" && message == "")
  ) {
    window.alert(
      "Uzupełnij nick albo wiadomość! Żadna z tych wartości nie może być pusta!"
    );
  } else {
    let fullMessage = `Użytkownik ${nameValue} napisał: ${message}`;
    socket.send(fullMessage);
  }
});
