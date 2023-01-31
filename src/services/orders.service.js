import ordersRepository from "../repositories/orders.repository.js";

const createOrder = async (order) => {
  return await ordersRepository.createOrder(order);
};
const updateOrder = async (order) => {
  
  return await ordersRepository.updateOrder(order)
}

export default {
  createOrder,
  updateOrder
}
