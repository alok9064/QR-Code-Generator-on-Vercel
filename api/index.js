import express from 'express';
import qr from 'qr-image';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(bodyParser.json());

// Generate QR code and return as base64 (no file storage)
app.post('/generate', (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const qr_png = qr.imageSync(url, { type: 'png' });
        const base64Image = Buffer.from(qr_png).toString('base64');
        res.json({ qrBase64: `data:image/png;base64,${base64Image}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

export default app;
