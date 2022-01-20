const express = require("express");
const app = express();
const port = 3000;
const uuid = require("uuid");
const Orders = [];

app.use(express.json());

const CheckRout = (request, response, next) => {

  const method = request.route.methods;
  const url = request.route.path;

  console.log(method, url);

  next();
};
const FindUserId = (request, response, next) => {

  const { id } = request.params;
  const index = Orders.findIndex((demand) => demand.id === id);

  if (index < 0) {
    return response.status(404).json({ error: "order not found" });
  }

  request.OrderIndex = index;

  request.OrderId = id;

  next();
};

app.get(`/order/`, CheckRout, (request, response) => {

  return response.json({ Orders });

});
app.post(`/order/`,CheckRout, (request, response) => {

  const { order, nameClient, value } = request.body;
  const demand = {id: uuid.v4(), order , nameClient ,value , status: "Em preparação" };

  Orders.push(demand);

  return response.status(201).json(demand);
});
app.put(`/order/:id`,CheckRout, FindUserId, (request, response) => {

  const { order, nameClient, value } = request.body;
  const index = request.OrderIndex;
  const id = request.OrderId;

  UptadeOrder = { id, order, nameClient, value, status: " Em preparação" };

  Orders[index] = UptadeOrder;

  return response.status(201).json(UptadeOrder);

});
app.delete(`/order/:id`, CheckRout,FindUserId, (request, response) => {

  const index = request.OrderIndex;

  Orders.splice(index, 1);

  return response.status(204).json();
});
app.get(`/order/:id`, CheckRout,FindUserId, (request, response) => {

  const index = request.OrderIndex;

  return response.json(Orders[index]);
});
app.patch("/order/:id", FindUserId, CheckRout, (request, response) => {
    
  const index = request.OrderIndex;
  const { id, order, NameClients, value } = Orders[index];
  let status = (Orders[index].status = "Finalizado");
  const UptadeStatus = { id, order, NameClients, value, status };

  Orders[index] = UptadeStatus;

  return response.status(201).json(UptadeStatus);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
