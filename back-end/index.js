import express, { json } from "express";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { orderRouter } from "./routes/order.js";
import { config } from "dotenv";

config();
//hellooo
const port = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());

app.use("/users", userRouter);
app.use("/orders", orderRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
