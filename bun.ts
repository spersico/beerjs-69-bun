export default {
  port: 8000,
  fetch(_) {
    return new Response('Hello, Beerjs!');
  },
};

// bun bun.ts
// sudo siege http://127.0.0.1:8000 -t10s
