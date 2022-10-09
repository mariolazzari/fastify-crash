const {
  getItems,
  getItem,
  addItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

// item schema
const Item = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
  },
};

// get all items options
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

// get item options
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

// add item options
const addItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: {
          type: "string",
        },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

// update item options
const updateItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
};

// delete item options
const delItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteItem,
};

// item routes
const itemRoutes = (fastify, options, done) => {
  fastify.get("/items", getItemsOpts);
  fastify.get("/items/:id", getItemOpts);
  fastify.post("/items", addItemOpts);
  fastify.put("/items/:id", updateItemOpts);
  fastify.delete("/items/:id", delItemOpts);

  done();
};

module.exports = itemRoutes;
