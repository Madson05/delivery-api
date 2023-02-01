import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

const getOrders = async () => {
  return JSON.parse(await readFile(global.fileName));
};

const createOrder = async (order) => {
  const data = await getOrders();

  order = {
    id: data.nextId++,
    cliente: order.cliente,
    produto: order.produto,
    valor: order.valor,
    entregue: false,
    timeStamp: new Date(),
  };

  data.orders.push(order);

  await writeFile(fileName, JSON.stringify(data));

  return order;
};

const updateOrder = async (order) => {
  const data = await getOrders();

  const index = data.orders.findIndex((a) => a.id === order.id);

  if (index === -1) throw new Error("Registro não encontrado na base de dados");
  console.log(order)
  data.orders[index].cliente = order.cliente;
  data.orders[index].produto = order.produto;
  data.orders[index].valor = order.valor;
  data.orders[index].entregue = order.entregue;

  await writeFile(fileName, JSON.stringify(data));

  return data.orders[index];
};

const deleteOrder = async (id) => {
  try {
    const data = await getOrders();
    data.orders = data.orders.filter((order) => order.id !== parseInt(id));

    await writeFile(fileName, JSON.stringify(data));

    return data.orders;
  } catch (error) {
    return error;
  }
};

export default {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
