import ordersRepository from "../repositories/orders.repository.js";

const createOrder = async (order) => {
  return await ordersRepository.createOrder(order);
};

export default {
  createOrder
}
