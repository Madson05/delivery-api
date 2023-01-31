import { promises as fs } from "fs";


const { readFile, writeFile } = fs;

const createOrder = async (order) => {
  const data = JSON.parse(await readFile(global.fileName));

  order = {
    id: data.nextId++,
    cliente: order.client,
    produto: order.product,
    valor: order.value,
    entregue: false,
    timeStamp: new Date()
  }

  data.orders.push(order)

  await writeFile(fileName, JSON.stringify(data))

  return(order);
};

export default {
  createOrder,
};
