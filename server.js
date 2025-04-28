// Custom Next.js server with patches for development issues

// Apply patches for Next.js
require('./src/patch-next.js');

// Create a custom server
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');

// Process.env patch for Next.js deployment ID error
process.env.__NEXT_DEPLOYMENT_ID = 'local-development';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

// Create Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Create fallback for 404 errors
const fallbackHtml = `
<!DOCTYPE html>
<html>
<head>
  <title>SOL Modern</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 20px; }
    h1 { font-size: 24px; margin-bottom: 20px; }
    p { margin-bottom: 16px; line-height: 1.5; }
    a { color: #E57161; text-decoration: none; }
  </style>
</head>
<body>
  <h1>SOL Modern - Blueprint</h1>
  <p>Please use one of the following direct links:</p>
  <ul>
    <li><a href="/executive-summary">Executive Summary</a></li>
    <li><a href="/market-intelligence">Market Intelligence</a></li>
    <li><a href="/competitive-landscape">Competitive Landscape</a></li>
    <li><a href="/opportunity-map">Opportunity Map</a></li>
  </ul>
</body>
</html>
`;

// Prepare Next.js
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse request URL
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      
      // Force index to always use fallback
      if (pathname === '/' || pathname === '/index' || pathname === '/index.html') {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(fallbackHtml);
        return;
      }
      
      // Handle all other routes with Next.js
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});