import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", async (req, res) => {
  res.json({ message: "welcome to node js from docker 😊" });
});

app.listen(PORT, () => {
  console.log(`server listening to http://localhost:${PORT}`);
});
