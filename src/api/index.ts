import { config } from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import router from "./routers/router";
import morgan from "morgan";

config();

export type ServerError = {
  log: string;
  status?: number;
  message: { err: string };
};

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(bodyParser.json());

app.use("/", router());

app.use(
  "/",
  (err: ServerError, req: Request, res: Response, next: NextFunction) => {
    const defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error occurred" },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}/`)
);
