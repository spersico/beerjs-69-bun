import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';

const app = new Hono();
app.use('*', logger());
app.use('*', cors());

const api = new Hono();
api.post('/posts', async (c) => {
  const post = await c.req.json();
  return c.json({ incoming: post });
});

api.get('/posts', async (c) => {
  return c.json({ date: new Date().toJSON() });
});

app.route('/api', api);

export default {
  port: 3000,
  fetch: app.fetch,
};

// bun bun.ts
