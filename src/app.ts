import cors from "cors";
import Express from "express";
import morgan from "morgan";
import { router } from "./routes/handler.routes";

const app = Express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(Express.json());

//Routes
app.use("/api", router);

export default app;