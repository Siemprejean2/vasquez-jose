const express = require('express');
const cors = require('cors');
const generateFibonacci = require('./fibonacci.js');

const app = express();
const port = 3000;

app.use(cors());

// Endpoint para la serie de Fibonacci
app.get('/fibonacci', (req, res) => {
    const n = parseInt(req.query.n);

    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: 'Invalid number' });
    }

    const fibSeries = generateFibonacci(n);

    return res.json({ fibonacci: fibSeries });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
