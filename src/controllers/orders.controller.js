import ordersService from "../services/orders.service.js";

const createorder = async (req, res, next) => {
  try {
    let order = req.body;
    if (!order.client || !order.product || order.value === null)
      throw new Error(
        "Os campos client, product e value devem ser fornecidos no JSON da requisição"
      );
    res.send(await ordersService.createOrder(order));

  } catch (error) {
    next(error);
  }
};

export default {
  createorder,
};
