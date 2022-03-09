const express = require("express");
const app = express();
const PORT = 5050;

const axios = require("axios");

app.listen(PORT);

app.use(express.json());

let messageData = {
  message: [
    { sent: "hi" },
    { recive: "hello" },
    { recive: "hello" },
    { sent: "hi dwaljkwjdjw ndklwldknawkld dlwkadl" },
    { recive: "hello" },
  ],
};
app.get("/message", (req, res) => {
  res.status(200).send({
    message: messageData,
  });
});

app.post("/message", (req, res) => {
  const { message } = req.body;
  console.log("req.body", req.body);
  if (!message) {
    res.status(405).send({ message: "Please enter messgae" });
  } else {
    let oldMessage = messageData.message;
    let newMessage = { sent: message };
    let data = [...oldMessage, newMessage];

    messageData.message = data;
    console.log("data", data);
    res.status(200).send({
      message: data,
    });
  }
});
