
import ordersService from "../services/orders.service.js";

const createOrder = async (req, res, next) => {
  try {
    let order = req.body;
    if (!order.cliente || !order.produto || order.valor === null)
      throw new Error(
        "Os campos cliente, produto e valor devem ser fornecidos no JSON da requisição"
      );
    res.send(await ordersService.createOrder(order));
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    let order = req.body;
    if (
      !order.cliente ||
      !order.produto ||
      order.valor === null ||
      !order.id ||
      order.entregue == null
    )
      throw new Error(
        "Os campos id, cliente, produto, valor e entregue devem ser fornecidos no JSON da requisição"
      );
    if (typeof order.entregue !== "boolean")
      throw new Error(
        "O atributo entregue deve ser do tipo boolean (true ou false)"
      );

    res.send(await ordersService.updateOrder(order));
  } catch (error) {
    next(error);
  }
};

const updateEntregue = async (req, res, next) => {
  try {
    let order = req.body;
    if (
      !order.id ||
      order.entregue == null ||
      typeof order.entregue !== "boolean"
    )
      throw new Error(
        "Os campos id e entregue devem ser fornecidos no JSON da requisição e o campo entregue deve ser do tipo boolean (true ou false)"
      );

    
    res.send(await ordersService.updateEntregue(order));
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.id;

    res.send(await ordersService.deleteOrder(id));
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const id = req.params.id;

    res.send(await ordersService.getOrder(id));
  } catch (error) {
    next(error);
  }
};

const valueClient = async (req, res, next) => {
  try {
    const cliente = req.body;

    if (!cliente.cliente) throw new Error("Campo cliente obrigatorio");

    res.send(await ordersService.valueClient(cliente.cliente));
  } catch (error) {
    next(error);
  }
};
const valueOrder = async (req, res, next) => {
  try {
    const cliente = req.body;

    if (!cliente.produto) throw new Error("Campo produto obrigatorio");

    res.send(await ordersService.valueOrder(cliente.produto));
  } catch (error) {
    next(error);
  }
};

const topProducts = async (req, res, next) => {
  try{
    res.send(await ordersService.topProducts())
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
  valueClient,
  valueOrder,
  topProducts
};
