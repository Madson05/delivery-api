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

const updateEntregue = async (req, res, next) => {
  try{
    let order = req.body;
    if (!order.id || order.entregue == null || typeof order.entregue !== "boolean")
      throw new Error(
        "Os campos id e entregue devem ser fornecidos no JSON da requisição e o campo entregue deve ser do tipo boolean (true ou false)"
      );

    console.log(await ordersService.updateEntregue(order))
    res.end()

  }catch(error){
    next(error)
  }
}

const deleteOrder = async (req, res, next) => {
  try{
    const id = req.params.id;

    res.send(await ordersService.deleteOrder(id))
  }catch(error){
    next(error)
  }
}

const getOrder = async (req, res, next) => {
  try{
    const id = req.params.id;

    res.send(await ordersService.getOrder(id))
  }catch(error){
    next(error)
  }
}

const valorCliente = async (req, res, next) => {
  try{
    const client = req.body;

    if(!client.client) throw new Error("Campo client obrigatorio")

    res.send(await ordersService.valorCliente(client.client))
  }catch(error){
    next(error)
  }
}


export default {
  createOrder,
  updateOrder,
  updateEntregue,
  deleteOrder,
  getOrder,
  valorCliente
};
