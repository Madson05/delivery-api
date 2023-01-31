import express from "express";
import ordersRouter from "./routes/orders.routes.js";

const app = express();
const port = 3000;
global.fileName = "data/pedidos.json";

app.use(express.json());
app.use("/orders", ordersRouter);

app.listen(port, () => {
  console.log(`API started on port ${port}`);
});
