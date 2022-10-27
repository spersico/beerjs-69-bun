import { serve } from 'https://deno.land/std/http/server.ts';
import { Hono } from 'https://deno.land/x/hono/mod.ts';

const app = new Hono();

app.get('/', (c) => c.text('Hello! Hono!'));

serve(app.fetch);

// deno run --allow-net https://examples.deno.land/http-server.ts
// sudo siege http://127.0.0.1:8000 -t10s
