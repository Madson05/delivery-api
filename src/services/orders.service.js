import ordersRepository from "../repositories/orders.repository.js";

const createOrder = async (order) => {
  return await ordersRepository.createOrder(order);
};
const updateOrder = async (order) => {
  
  return await ordersRepository.updateOrder(order)
}

const updateEntregue = async (order) => {
  
  return await ordersRepository.updateEntregue(order);
}

const deleteOrder = async (id) => {
  
  return await ordersRepository.deleteOrder(id);
}
const getOrder = async (id) => {
  
  return await ordersRepository.getOrder(id);
}

export default {
  createOrder,
  updateOrder,
  updateEntregue,
  deleteOrder, 
  getOrder
}
