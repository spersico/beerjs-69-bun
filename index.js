import Fastify from 'fastify';
const fastify = Fastify({});

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send('Tengo sed, quiero birra');
});

// Run the server!
fastify.listen({ port: 8000 }, (err, address) => {
  if (err) throw err;
  console.log('Dale nomás');
  // Server is now listening on ${address}
});
