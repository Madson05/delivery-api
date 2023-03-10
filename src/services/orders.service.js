import ordersRepository from "../repositories/orders.repository.js";

const createOrder = async (order) => {
  return await ordersRepository.createOrder(order);
};
const updateOrder = async (order) => {
  return await ordersRepository.updateOrder(order);
};

const updateEntregue = async (order) => {
  const data = await ordersRepository.getOrders();

  const index = data.orders.findIndex((a) => a.id === order.id);

  if (index === -1) throw new Error("Registro não encontrado na base de dados");

  data.orders[index].entregue = order.entregue;
  console.log(data.orders[index]);
  return await ordersRepository.updateOrder(data.orders[index]);
};

const deleteOrder = async (id) => {
  return await ordersRepository.deleteOrder(id);
};

const getOrder = async (id) => {
  const data = await ordersRepository.getOrders();

  let order = data.orders.filter((order) => order.id === parseInt(id));

  return order;
};

const valueClient = async (cliente) => {
  const data = await ordersRepository.getOrders();
  let sumValue = 0;

  data.orders.forEach((order) => {
    if (order.cliente === cliente && order.entregue === true) {
      sumValue += order.valor;
    }
  });

  return { sumValue };
};

const valueOrder = async (product) => {
  const data = await ordersRepository.getOrders();
  let sumValue = 0;

  data.orders.forEach((order) => {
    if (order.produto === product && order.entregue === true) {
      sumValue += order.valor;
    }
  });

  return { sumValue };
};

const topProducts = async () => {
  const listProducts = [];

  const data = await ordersRepository.getOrders();
  const products = data.orders
    .filter((order) => order.entregue === true)
    .map((order) => order.produto);

  const uniqueProducts = new Set(products);

  uniqueProducts.forEach((order) => {
    listProducts.push({ qnt: 0, produto: order });
  });

  products.forEach((product) => {
    listProducts.forEach((productAux) => {
      if(product === productAux.produto) productAux.qnt++
    })

  })

  listProducts.sort((a,b) => b.qnt-a.qnt)

  

  return listProducts;
};

export default {
  createOrder,
  updateOrder,
  updateEntregue,
  deleteOrder,
  getOrder,
  valueClient,
  valueOrder,
  topProducts,
};
