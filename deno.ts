import { serve } from 'https://deno.land/std@0.119.0/http/server.ts';

function handler(_req: Request): Response {
  return new Response('Hello, World!');
}
console.log('Listening on http://localhost:8000');
serve(handler);

// deno run --allow-net https://examples.deno.land/http-server.ts
// sudo siege http://127.0.0.1:8000 -t10s
