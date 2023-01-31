import ordersService from "../services/orders.service.js";

const createOrder = async (req, res, next) => {
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

const updateOrder = async (req, res, next) => {
  try{
    let order = req.body;
    if (!order.client || !order.product || order.value === null || !order.id || order.entregue == null)
      throw new Error(
        "Os campos id, client, product, value e entregue devem ser fornecidos no JSON da requisição"
      );
    if(typeof order.entregue !== "boolean") throw new Error("O atributo entregue deve ser do tipo boolean (true ou false)")
    
    res.send(await ordersService.updateOrder(order))
    
  }catch(error){
    next(error)
  }
}

export default {
  createOrder,
  updateOrder
};
