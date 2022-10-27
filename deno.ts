import { serve } from 'https://deno.land/std@0.119.0/http/server.ts';

const POSTS_ROUTE = new URLPattern({ pathname: '/api/posts/:id' });

function handler(_req: Request): Response {
  return new Response('Hello, World!');
}
console.log('Listening on http://localhost:8000');
serve(handler);

// deno run --allow-net https://examples.deno.land/http-server.ts
