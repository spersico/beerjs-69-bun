import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';

const app = new Hono();
// app.use('*', logger()); // SEGFAULT
app.use('*', cors());

const api = new Hono();
api.post('/posts', async (c) => {
  const post = await c.req.json();
  return c.json({ incoming: post });
});

app.get('/', async (c) => {
  return c.text('Hello BeerJS');
});

app.route('/api', api);

export default {
  port: 8000,
  fetch: app.fetch,
};

// bun bun.ts
// sudo siege http://127.0.0.1:8000 -t10s
