import { AppDataSource } from "./data-source";
import express, { Request, Response } from "express";
import cors from "cors";
import Route from "./routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 5000;

    app.use(cors());
    app.use(express.json());
    app.use("/api/v1/", Route);

    app.get("/hello", (req: Request, res: Response) => {
      res.status(200).json({ data: "get data success" });
    });

    app.listen(port, () => console.log(`Server success on Port ${port}`));
  })
  .catch((error) => console.log(error));
