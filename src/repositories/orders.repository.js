import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

const getOrders = async () => {
  return JSON.parse(await readFile(global.fileName));
};

const createOrder = async (order) => {
  const data = await getOrders();

  order = {
    id: data.nextId++,
    cliente: order.client,
    produto: order.product,
    valor: order.value,
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

  data.orders[index].cliente = order.client;
  data.orders[index].produto = order.product;
  data.orders[index].valor = order.value;
  data.orders[index].entregue = order.entregue;

  await writeFile(fileName, JSON.stringify(data));
  
  return (data.orders[index]);
};

export default {
  createOrder,
  updateOrder,
};