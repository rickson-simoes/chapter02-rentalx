import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.status(201).json({ message: "Hello world" });
});

app.listen(3333, () => {
  console.log("🚀 Servidor Rodando!! 👨‍💻");
});
