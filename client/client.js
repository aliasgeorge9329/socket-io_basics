const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log(socket.connected ? "connected" : "not connected");
});

socket.on("disconnect", () => {
  console.log(socket.connected ? "connected" : "not connected");
});

socket.on("hello", (arg) => {
  console.log(arg); // world
});
