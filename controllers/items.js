let items = require("../items");
const { v4: uuid } = require("uuid");

const getItems = (req, res) => {
  res.send(items);
};

const getItem = (req, res) => {
  const { id } = req.params;
  const item = items.find(item => item.id === id);

  res.send(item);
};

const addItem = (req, res) => {
  const { name } = req.body;

  const item = {
    id: uuid(),
    name,
  };

  items = [...items, item];

  res.code(201).send(item);
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const item = { ...req.body };
  items.map(i => (i.id === id ? item : i));

  res.send(item);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  items = items.filter(item => item !== id);

  res.send({ message: `Item ${id} deleted` });
};

module.exports = {
  getItems,
  getItem,
  addItem,
  updateItem,
  deleteItem,
};
