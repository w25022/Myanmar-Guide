import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static assets from project root or dist depending on execution environment
const isProd = process.env.NODE_ENV === 'production';
const staticDir = isProd ? path.join(process.cwd(), 'dist') : process.cwd();

// Serve static assets with CORS and cache headers
app.use(express.static(staticDir));

// Fallback to index.html for SPA/root requests
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🇲🇲 Myanmar Guide app running on http://0.0.0.0:${PORT}`);
});
