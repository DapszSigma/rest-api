import express from "express";
import tiktok from "./api/tiktok.js";

const app = express();

app.get("/api/tiktok", (req, res) => {
  return tiktok(req, res);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
    
