const express = require('express');
const generateFibonacci = require('./fibonacci.js');
const app = express();

// Endpoint para la serie de Fibonacci
app.get('/fibonacci', (req, res) => {
    const n = parseInt(req.query.n);

    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: 'Invalid number' });
    }

    const fibSeries = generateFibonacci(n);

    return res.json({ fibonacci: fibSeries });
});

// Ruta raíz, responde con un mensaje de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi servidor Express!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
