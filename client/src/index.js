import ReactDOM from "react-dom";
import React from "react";
import "./style.css";
import App from "./App";
import Box from "./Components/Box";

import { io } from "socket.io-client";

const socket = io("ws://localhost:3000", {
  extraHeaders: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-type, Authorization, X-Requested-With",
  },
  transports: ["websocket", "polling", "flashsocket"],
});

socket.on("connect", () => {
  console.log("Connected to server:");
  console.log("test")
});

ReactDOM.render(<App />, document.getElementById("root"));
