import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

// Load environment variables
config();

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

export default app;