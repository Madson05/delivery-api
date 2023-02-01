import express from "express";
import ordersController from "../controllers/orders.controller.js";

const router = express.Router();

router.post("/create", ordersController.createOrder);
router.put("/update", ordersController.updateOrder);
router.patch("/updateEntregue", ordersController.updateEntregue);
router.delete("/delete/:id", ordersController.deleteOrder);

router.use((error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

export default router;
