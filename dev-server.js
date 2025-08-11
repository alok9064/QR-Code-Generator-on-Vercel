import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './api/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a wrapper Express app for local dev
const devApp = express();

// Serve public folder
devApp.use(express.static(path.join(__dirname, 'public')));

// Mount your API routes at the root (so /generate works)
devApp.use('/', app);

const PORT = 3000;
devApp.listen(PORT, () => {
  console.log(`🚀 Local dev server running at http://localhost:${PORT}`);
});
