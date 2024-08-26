import express, { Request, Response } from "express";
import path from "path";

const PORT = 3000;

function init() {
  const app = express();

  app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Succes fetch message",
      data: "Hello world!",
    });
  });

  app.get("/user", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Succes fetch user",
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
