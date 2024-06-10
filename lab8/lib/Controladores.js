const express = require('express');
const app = express();
app.use(express.json());

let ingresos = [];
let egresos = [];

// 3.1. Controlador para almacenar los "ingresos"
app.post('/api/ingresos', (req, res) => {
    const ingreso = req.body;
    ingresos.push(ingreso);
    res.status(201).json({ message: 'Ingreso agregado', ingreso });
});

// 3.2. Controlador para leer los "ingresos"
app.get('/api/ingresos', (req, res) => {
    res.json(ingresos);
});

// 3.3. Controlador para almacenar los "egresos"
app.post('/api/egresos', (req, res) => {
    const egreso = req.body;
    egresos.push(egreso);
    res.status(201).json({ message: 'Egreso agregado', egreso });
});

// 3.4. Controlador para leer los "egresos"
app.get('/api/egresos', (req, res) => {
    res.json(egresos);
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
