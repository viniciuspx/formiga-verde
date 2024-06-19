import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from "express";
import route from "./routes/route";

// Enviroment Config
dotenv.config();

const app: Application = express();
const port = process.env.PORT;

// Middleware para parsear JSON
app.use(express.json());

// Usar a rota do único End-point
app.use("/api/device", route);

// Rota padrão
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, world!" });
});

// Middleware de tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log("----------------------------------------------");
  console.log(`Server is running on port ${port}`);
  console.log("----------------------------------------------");
});

export default app;
