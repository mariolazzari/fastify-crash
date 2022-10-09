const fastify = require("fastify")({ logger: true });
const path = require("path");

const PORT = 5000;

// register static
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  // prefix: "/docs/", // optional: default '/'
});

// register swagger
fastify.register(require("@fastify/swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "fastigy-api",
    },
  },
});

// register routes
fastify.register(require("./routes/items"));

// start server
const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
